from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    SettingViewSet,
    ProfileViewSet,
    InboxViewSet,
    DislikeViewSet,
    MatchViewSet,
    UserPhotoViewSet,
    LikeViewSet,
)

router = DefaultRouter()
router.register("like", LikeViewSet)
router.register("match", MatchViewSet)
router.register("setting", SettingViewSet)
router.register("profile", ProfileViewSet)
router.register("dislike", DislikeViewSet)
router.register("inbox", InboxViewSet)
router.register("userphoto", UserPhotoViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
