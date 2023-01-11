from django.urls import path
from . import views
from .views import MyTokenObtainPairView
from rest_framework import routers


from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
router = routers.DefaultRouter()

urlpatterns = router.urls

urlpatterns += [
   
    path('signUp/', views.signUp),
    path('login/', views.userLogin),
    
    path('save-game/', views.GameAPIView.as_view()),
    path('remove-game/', views.removeGame),
    
    
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    path('curr-user/', views.curr_user)
]

