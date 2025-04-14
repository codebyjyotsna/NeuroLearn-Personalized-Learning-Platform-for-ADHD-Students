INSTALLED_APPS = [
    # Other apps
    'rest_framework',
    'corsheaders',
    'users',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    # Other middleware
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # React frontend
    # Add production URLs here
]
