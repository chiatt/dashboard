define([
    'knockout',
    'arches',
    'js-cookie',
    'templates/views/components/plugins/dashboard.htm'
], function(ko, arches, Cookies, DashboardTemplate) {

    const DashboardViewModel = function() {
        const self = this;
        this.loading = ko.observable(true);
        this.records = ko.observable();

        this.getStatus = async function() {
            const response = await window.fetch(arches.urls.dashboard);
            const data = await response.json();
            self.resourceCount = data.resource_count;
            self.tileCount = data.tile_count;
            self.records(data.records);
            self.loading(false);
        };

        this.saveStatus = async function() {
            const response = await fetch(arches.urls.dashboard, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "X-CSRFToken": Cookies.get('csrftoken')
                }
            });
            const data = await response.json();
            self.records(data.records);
        };

        this.getStatus();
    };

    return ko.components.register('dashboard', {
        viewModel: DashboardViewModel,
        template: DashboardTemplate
    });
});
