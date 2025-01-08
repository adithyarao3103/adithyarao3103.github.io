const siteMap = {
    'home': {
        url: '/',
    },
    'now': {
        url: '/now/'
    },
    'interactive': {
        url: '/interactive/',
        children: {
            'Monte-Carlo': {
                url: '/interactive/Monte-Carlo/'
            },
            'Hopfield-Network': {
                url: '/interactive/Hopfield-Network/'
            },
            'Spanning-Trees-on-Lattice': {
                url: '/interactive/Spanning-Trees-on-Lattice/',
                children: {
                    'Spanning_Trees_on_a_Lattice.pdf': {
                        url: '/interactive/Spanning-Trees-on-Lattice/Spanning_Trees_on_a_Lattice.pdf'
                    }
                }
            },
            'Game-Of-Life': {
                url: '/interactive/Game-Of-Life/'
            }
        }
    },
    'art': {
        url: '/art/'
    },
    'old-website': {
        url: '/old-website/'
    },
    'older-website': {
        url: '/older-website/'
    },
    'travel': {
        url: '/travel/'
    },
    'files': {
        url: '/files/',
        children: {
            'Adithya_A_Rao_CV.pdf': {
                url: '/files/Adithya_A_Rao_CV.pdf'
            },
            'Adithya_Quanta.pdf': {
                url: '/files/Adithya_Quanta.pdf'
            },
            'The_particle_problem.pptx': {
                url: '/files/The particle problem.pptx'
            }
        }
    }
}



function generateSitemap(siteMap) {
    function buildTree(node, name = '') {
        if (!node) return '';

        let html = '';
        if (node.url) {
            html += `<li><a href="${node.url}" class="node">${formatName(name)}</a>`;
        } else {
            html += `<li><a class="node">${formatName(name)}</a>`;
        }

        if (node.children) {
            html += '<ul>';
            for (const [childName, childNode] of Object.entries(node.children)) {
                html += buildTree(childNode, childName);
            }
            html += '</ul>';
        }

        html += '</li>';
        return html;
    }

    function formatName(name) {
        // Convert names like 'monte-carlo' to 'Monte Carlo', but keep extensions lowercase.
        return name
            .replace(/-/g, ' ')
            .replace(/\b\w/g, char => char.toUpperCase())
            .replace(/\.(\w+)$/, match => match.toLowerCase());
    }

    let sitemapHtml = '<h1 class="h1">Sitemap</h1><ul class="tree">';
    for (const [key, value] of Object.entries(siteMap)) {
        sitemapHtml += buildTree(value, key);
    }
    sitemapHtml += '</ul>';

    return sitemapHtml;
}

document.getElementById('tree-holder').innerHTML = generateSitemap(siteMap);