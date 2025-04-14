from django.urls import path
from .views import AttentionLogView

urlpatterns = [
    path('log-attention/', AttentionLogView.as_view(), name='log-attention'),
]
