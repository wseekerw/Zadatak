from rest_framework import serializers
from notes.models import Note
from accounts.api.serializers import UserSerializer


class NoteSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Note
        fields = [
            'id',
            'title',
            'content',
            'user',
            'timestamp'
        ]

class NoteCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = [
            'title',
            'content',
        ]

