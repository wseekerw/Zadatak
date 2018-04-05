from django.conf.urls import url
from .views import (
    NoteListAPIView,
    NoteDetailAPIView,
    NoteCreateAPIView,
    NoteByUserListAPIView
)


urlpatterns = [
    url(r'^$', NoteListAPIView.as_view(), name='note_list'),
    url(r'^notes_by_user/$', NoteByUserListAPIView.as_view(), name='note_user_list'),
    url(r'^create/$',  NoteCreateAPIView.as_view(), name='note_create'),
    url(r'(?P<pk>\d+)/$',  NoteDetailAPIView.as_view(), name='note_detail'),
]