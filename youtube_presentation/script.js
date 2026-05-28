document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.container_onglets .onglet');
    const panel = document.getElementById('tab-content');

    if (!panel || tabs.length === 0) return;

    function setActive(tab) {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    }

    async function loadTab(tab) {
        const src = tab.dataset.src;
        if (!src) {
            panel.innerHTML = '';
            return;
        }
        panel.innerHTML = 'Chargement...';
        try {
            const res = await fetch(src);
            if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
            const html = await res.text();
            panel.innerHTML = html;
        } catch (err) {
            panel.innerHTML = '<p>Impossible de charger le contenu. Vérifiez le chemin ou le serveur.</p>';
            console.error('Erreur chargement onglet:', err);
        }
    }

    tabs.forEach((tab, idx) => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            setActive(tab);
            loadTab(tab);
        });
    });

    // Charger le premier onglet par défaut
    setActive(tabs[0]);
    loadTab(tabs[0]);
});
