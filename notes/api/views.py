from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView


from notes.models import Note
from .serializers import NoteSerializer, NoteCreateSerializer
from rest_framework import permissions

class NoteListAPIView(ListAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class NoteByUserListAPIView(ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def get_queryset(self):
        """
        Filter for map objects query which
        return all objects only from authenticated user.
        """
        user = self.request.user
        return Note.objects.filter(user=user)


class NoteDetailAPIView(RetrieveAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer


class NoteCreateAPIView(CreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteCreateSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)