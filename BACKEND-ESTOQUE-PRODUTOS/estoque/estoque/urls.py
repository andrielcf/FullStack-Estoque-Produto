from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('estoque_app.urls')),  # Inclua as URLs do app 'estoque_app'
]
