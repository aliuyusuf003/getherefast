from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, style={"input_type": "password"})
    name = serializers.CharField(write_only=True, required=True)  # maps to first_name
    email = serializers.EmailField(required=True)
    class Meta:
        model = User
        fields = ["username", "name", "email", "password"]
        extra_kwargs = {"password":{"write_only":True}}
    

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            password=validated_data["password"],
            email=validated_data["email"],
            first_name=validated_data["name"],
        )

        return user

  


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "title", "content", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}