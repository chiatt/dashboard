from django.urls import re_path
from dashboard.views.dashboard import Dashboard

urlpatterns = [
    re_path(r"^dashboard/", Dashboard.as_view(), name="dashboard"),
]
