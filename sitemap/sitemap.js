const siteMap = {
    'home': {
        url: 'https://adithyarao3103.github.io/',
    },
    'now': {
        url: 'https://adithyarao3103.github.io/now/'
    },
    'interactive': {
        url: 'https://adithyarao3103.github.io/interactive/',
        children: {
            'Monte-Carlo': {
                url: 'https://adithyarao3103.github.io/interactive/Monte-Carlo/'
            },
            'Hopfield-Network': {
                url: 'https://adithyarao3103.github.io/interactive/Hopfield-Network/'
            },
            'Spanning-Trees-on-Lattice': {
                url: 'https://adithyarao3103.github.io/interactive/Spanning-Trees-on-Lattice/',
                children: {
                    'Spanning_Trees_on_a_Lattice.pdf': {
                        url: 'https://adithyarao3103.github.io/interactive/Spanning-Trees-on-Lattice/Spanning_Trees_on_a_Lattice.pdf'
                    }
                }
            },
            'Game-Of-Life': {
                url: 'https://adithyarao3103.github.io/interactive/Game-Of-Life/'
            }
        }
    },
    'art': {
        url: 'https://adithyarao3103.github.io/art/'
    },
    'old-website': {
        url: 'https://adithyarao3103.github.io/old-website/'
    },
    'older-website': {
        url: 'https://adithyarao3103.github.io/older-website/'
    },
    'travel': {
        url: 'https://adithyarao3103.github.io/travel/'
    },
    'files': {
        children: {
            'Adithya_A_Rao_CV.pdf': {
                url: 'https://adithyarao3103.github.io/files/Adithya_A_Rao_CV.pdf'
            },
            'Adithya_Quanta.pdf': {
                url: 'https://adithyarao3103.github.io/files/Adithya_Quanta.pdf'
            },
            'The_particle_problem.pptx': {
                url: 'https://adithyarao3103.github.io/files/The particle problem.pptx'
            }
        }
    }
};






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
        // Convert names like 'monte-carlo' to 'Monte Carlo', etc.
        return name
            .replace(/-/g, ' ')
            .replace(/\b\w/g, char => char.toUpperCase());
    }

    let sitemapHtml = '<h1 class="h1">Sitemap</h1><ul class="tree">';
    for (const [key, value] of Object.entries(siteMap)) {
        sitemapHtml += buildTree(value, key);
    }
    sitemapHtml += '</ul>';

    return sitemapHtml;
}

document.getElementById('tree-holder').innerHTML = generateSitemap(siteMap);