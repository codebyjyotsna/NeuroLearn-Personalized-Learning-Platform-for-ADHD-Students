from rest_framework.views import APIView
from rest_framework.response import Response
from .models import UserProfile

class AttentionLogView(APIView):
    def post(self, request):
        user_id = request.data.get('user_id')
        attention_data = request.data.get('attention_data')
        user = UserProfile.objects.get(user_id=user_id)
        user.attention_logs.append(attention_data)
        user.save()
        return Response({"message": "Attention data logged."})
