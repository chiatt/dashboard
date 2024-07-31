# Arches Dashboard

Arches Dashboard is a very basic example of an Arches App. It demonstrates how to create an app that adds an Arches component with Django model and view. 
Specifically it adds a plugin that displays a summary of resources and tiles in the system, and allows a user to record 
that summary to monitor the change in the resource/tile count over time.

You can add the dashboard to an Arches project in just a few easy steps.

1. Install if from this repo (or clone this repo and pip install it locally). 
```
pip install git+https://github.com/chiatt/dashboard.git
```

2. Add `"dashboard"` to the INSTALLED_APPS setting in the demo project's settings.py file below the demo project:
```
INSTALLED_APPS = [
    ...
    "demo",
    "dashboard",
]
```

3. Version your dependency on `"dashboard"` in `pyproject.toml`:
```
dependencies = [
    "arches>=7.6.0,<7.7.0",
    "dashboard==0.0.1",
]
```

4. Update your urls.py file in your project:
```
from django.urls import include, path
```
and then the following path:   
```
path("", include("dashboard.urls")),
```

5. From your project run migrate to add the model included in the app:
```
python manage.py migrate
```

6. Next be sure to rebuild your project's frontend to include the plugin:
```
npm run build_development
```

7. When you're done you should see the Dashboard plugin added to your main navigation bar:
 <img width="652" alt="Dashboard plugin" src="https://github.com/chiatt/dashboard/assets/1877663/5c45727d-fee9-46c1-94fa-fa18358353bf">
