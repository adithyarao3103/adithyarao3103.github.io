// Blog search functionality with multiple search options
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const blogPosts = document.querySelectorAll('.project');
    
    // Store original posts for reference
    const originalPosts = Array.from(blogPosts);
    
    // Search function
    function searchBlogPosts() {
        const searchValue = searchInput.value.trim();
        
        // If search is empty, show all posts and hide no results message
        if (searchValue === '') {
            originalPosts.forEach(post => {
                post.style.display = 'block';
            });
            showNoResultsMessage(false, '', 'all');
            return;
        }
        
        // Determine search type and extract search term
        const searchType = getSearchType(searchValue);
        const searchTerm = extractSearchTerm(searchValue, searchType);
        
        // If prefix is used but no term after it, show all posts
        if (searchType !== 'all' && searchTerm === '') {
            originalPosts.forEach(post => {
                post.style.display = 'block';
            });
            showNoResultsMessage(false, '', searchType);
            return;
        }
        
        let visibleCount = 0;
        
        originalPosts.forEach(post => {
            const title = post.querySelector('h2').textContent.toLowerCase();
            const tags = post.querySelector('.tags').textContent.toLowerCase();
            const description = post.querySelector('.desc').textContent.toLowerCase();
            const dateElement = post.querySelector('.date');
            const date = dateElement ? dateElement.textContent.toLowerCase() : '';
            
            let matchesSearch = false;
            
            switch (searchType) {
                case 'tags':
                    // Search only in tags (t:)
                    matchesSearch = tags.includes(searchTerm);
                    break;
                case 'date':
                    // Search only in date (d:)
                    matchesSearch = date.includes(searchTerm);
                    break;
                case 'title':
                    // Search only in title (h:)
                    matchesSearch = title.includes(searchTerm);
                    break;
                case 'description':
                    // Search only in description (b:)
                    matchesSearch = description.includes(searchTerm);
                    break;
                default:
                    // Search in title, tags, and description (default behavior)
                    matchesSearch = title.includes(searchTerm) || 
                                  tags.includes(searchTerm) || 
                                  description.includes(searchTerm);
            }
            
            if (matchesSearch) {
                post.style.display = 'block';
                visibleCount++;
            } else {
                post.style.display = 'none';
            }
        });
        
        // Show "no results" message
        showNoResultsMessage(visibleCount === 0, searchTerm, searchType);
    }
    
    // Function to determine search type based on prefix
    function getSearchType(searchValue) {
        const lowerValue = searchValue.toLowerCase();
        if (lowerValue.startsWith('t:')) return 'tags';
        if (lowerValue.startsWith('d:')) return 'date';
        if (lowerValue.startsWith('h:')) return 'title';
        if (lowerValue.startsWith('b:')) return 'description';
        return 'all';
    }
    
    // Function to extract search term after prefix
    function extractSearchTerm(searchValue, searchType) {
        if (searchType === 'all') {
            return searchValue.toLowerCase();
        }
        return searchValue.slice(2).toLowerCase().trim();
    }
    
    // Function to get search type display name
    function getSearchTypeDisplay(searchType) {
        const displayNames = {
            'tags': 'tags',
            'date': 'dates',
            'title': 'titles',
            'description': 'descriptions',
            'all': 'blog posts'
        };
        return displayNames[searchType] || 'blog posts';
    }
    
    // Function to get search prefix display
    function getSearchPrefix(searchType) {
        const prefixes = {
            'tags': 'tag ',
            'date': 'date ',
            'title': 'title ',
            'description': 'description ',
            'all': ''
        };
        return prefixes[searchType] || '';
    }
    
    // Function to show/hide "no results" message
    function showNoResultsMessage(show, searchTerm, searchType = 'all') {
        let noResultsDiv = document.getElementById('no-results-message');
        
        if (show) {
            const searchTypeDisplay = getSearchTypeDisplay(searchType);
            const searchPrefix = getSearchPrefix(searchType);
            
            if (!noResultsDiv) {
                noResultsDiv = document.createElement('div');
                noResultsDiv.id = 'no-results-message';
                noResultsDiv.className = 'no-results';
                
                // Insert after the search box
                const searchDiv = document.getElementById('search');
                searchDiv.parentNode.insertBefore(noResultsDiv, searchDiv.nextSibling);
            }
            
            // Update message content
            const messageDiv = document.createElement('div');
            messageDiv.style.cssText = 'text-align: center; padding: 40px 20px; color: #666;';
            messageDiv.innerHTML = `
                <h3>No results found</h3>
                <p>No ${searchTypeDisplay} match your search for ${searchPrefix}"<strong>${escapeHtml(searchTerm)}</strong>"</p>
                <p>Try searching with different keywords or check the spelling.</p>
                ${getTipMessage(searchType)}
            `;
            
            noResultsDiv.innerHTML = '';
            noResultsDiv.appendChild(messageDiv);
            noResultsDiv.style.display = 'block';
        } else {
            if (noResultsDiv) {
                noResultsDiv.style.display = 'none';
            }
        }
    }
    
    // Function to get appropriate tip message based on search type
    function getTipMessage(searchType) {
        const tips = {
            'tags': '<p><em>Tip: Remove "t:" to search all content</em></p>',
            'date': '<p><em>Tip: Remove "d:" to search all content</em></p>',
            'title': '<p><em>Tip: Remove "h:" to search all content</em></p>',
            'description': '<p><em>Tip: Remove "b:" to search all content</em></p>',
            'all': '<p><em>Tips: Use "t:" for tags, "d:" for dates, "h:" for titles, "b:" for descriptions</em></p>'
        };
        return tips[searchType] || tips['all'];
    }
    
    // Helper function to escape HTML
    function escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    }
    
    // Update placeholder based on input
    function updatePlaceholder() {
        const currentValue = searchInput.value;
        const searchType = getSearchType(currentValue);
        
        const placeholders = {
            'tags': 'Search tags... (remove "t:" to search all)',
            'date': 'Search dates... (remove "d:" to search all)',
            'title': 'Search titles... (remove "h:" to search all)',
            'description': 'Search descriptions... (remove "b:" to search all)',
            'all': 'Search... (use "t:" for tags, "d:" for date, "h:" for title, "b:" for description)'
        };
        
        searchInput.placeholder = placeholders[searchType];
    }
    
    // Add event listeners - search as you type
    searchInput.addEventListener('input', function() {
        updatePlaceholder();
        debounce(searchBlogPosts, 300)();
    });
    
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Escape') {
            clearSearch();
        }
    });
    
    // Clear search function
    function clearSearch() {
        searchInput.value = '';
        searchInput.placeholder = 'Search... (use "t:" for tags, "d:" for date, "h:" for title, "b:" for description)';
        searchBlogPosts();
        searchInput.blur();
    }
    
    // Debounce function to limit search frequency
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Add keyboard shortcut (Ctrl/Cmd + K) to focus search
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });
    
    // Initialize placeholder
    updatePlaceholder();
});