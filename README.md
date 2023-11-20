# Arches Dashboard

Arches Dashboard is a very basic example of an Arches App. It demonstrates how to create an app that adds an Arches component with Django model and view. 
Specifically it adds a plugin that displays summary of resources and tiles in the system, and allows a user to record 
that summary to monitor the change in the resource/tile count over time.

You can add the dashboard to an Arches project in just a few easy steps.

1. Install if from this repo (or clone this repo and pip install it locally). 
```
pip install git+https://github.com/chiatt/dashboard.git
```

2. Add 'dashboard' as to the ARCHES_APPLICATIONS and INSTALLED_APPS settings in the demo project's settings.py file
```
ARCHES_APPLICATIONS = ("dashboard",)  # be sure to add the trailing comma!
INSTALLED_APPS = [
    ...
    "demo",
    "dashboard",
]
```

3. Update your urls.py file in your project with the following path:   
```
re_path(r"^", include("demo_app.urls")),
```

4. From your project run migrate to add the model included in the app
```python manage.py migrate```

5. Next be sure to rebuild your project's frontend to include the plugin:
```yarn build_development```

6. When you're done you should see the Dashboard plugin added to you main navigation bar:
 <img width="652" alt="image" src="https://github.com/chiatt/dashboard/assets/1877663/5c45727d-fee9-46c1-94fa-fa18358353bf">
