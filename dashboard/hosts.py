import re
from django_hosts import patterns, host

host_patterns = patterns(
    "",
    host(re.sub(r"_", r"-", r"dashboard"), "dashboard.urls", name="dashboard"),
)
