from django.db import models

class UserProfile(models.Model):
    user_id = models.CharField(max_length=100, unique=True)
    preferences = models.JSONField(default=dict)
    attention_logs = models.JSONField(default=list)
    progress = models.JSONField(default=dict)

    def __str__(self):
        return self.user_id
