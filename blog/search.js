// Blog search functionality
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
            showNoResultsMessage(false, '');
            return;
        }
        
        // Check if it's a tag-only search
        const isTagSearch = searchValue.toLowerCase().startsWith('t:');
        const searchTerm = isTagSearch 
            ? searchValue.slice(2).toLowerCase().trim() 
            : searchValue.toLowerCase();
        
        // If tag search but no term after "t:", show all posts
        if (isTagSearch && searchTerm === '') {
            originalPosts.forEach(post => {
                post.style.display = 'block';
            });
            showNoResultsMessage(false, '');
            return;
        }
        
        let visibleCount = 0;
        
        originalPosts.forEach(post => {
            const title = post.querySelector('h2').textContent.toLowerCase();
            const tags = post.querySelector('.tags').textContent.toLowerCase();
            const description = post.querySelector('.desc').textContent.toLowerCase();
            
            let matchesSearch = false;
            
            if (isTagSearch) {
                // Search only in tags
                matchesSearch = tags.includes(searchTerm);
            } else {
                // Search in title, tags, and description
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
        showNoResultsMessage(visibleCount === 0, searchTerm, isTagSearch);
    }
    
    // Function to show/hide "no results" message
    function showNoResultsMessage(show, searchTerm, isTagSearch = false) {
        let noResultsDiv = document.getElementById('no-results-message');
        
        if (show) {
            const searchType = isTagSearch ? 'tags' : 'blog posts';
            const searchPrefix = isTagSearch ? 'tag ' : '';
            
            if (!noResultsDiv) {
                noResultsDiv = document.createElement('div');
                noResultsDiv.id = 'no-results-message';
                noResultsDiv.className = 'no-results';
                noResultsDiv.innerHTML = `
                    <div style="text-align: center; padding: 40px 20px; color: #666;">
                        <h3>No results found</h3>
                        <p>No ${searchType} match your search for ${searchPrefix}"<strong>${escapeHtml(searchTerm)}</strong>"</p>
                        <p>Try searching with different keywords or check the spelling.</p>
                        ${isTagSearch ? '<p><em>Tip: Remove "t:" to search all content</em></p>' : '<p><em>Tip: Use "t:" prefix to search tags only (e.g., "t:physics")</em></p>'}
                    </div>
                `;
                
                // Insert after the search box
                const searchDiv = document.getElementById('search');
                searchDiv.parentNode.insertBefore(noResultsDiv, searchDiv.nextSibling);
            } else {
                // Update existing message
                const messageDiv = noResultsDiv.querySelector('div');
                messageDiv.innerHTML = `
                    <h3>No results found</h3>
                    <p>No ${searchType} match your search for ${searchPrefix}"<strong>${escapeHtml(searchTerm)}</strong>"</p>
                    <p>Try searching with different keywords or check the spelling.</p>
                    ${isTagSearch ? '<p><em>Tip: Remove "t:" to search all content</em></p>' : '<p><em>Tip: Use "t:" prefix to search tags only (e.g., "t:physics")</em></p>'}
                `;
                noResultsDiv.style.display = 'block';
            }
        } else {
            if (noResultsDiv) {
                noResultsDiv.style.display = 'none';
            }
        }
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
        if (currentValue.toLowerCase().startsWith('t:')) {
            searchInput.placeholder = 'Search tags... (remove "t:" to search all)';
        } else {
            searchInput.placeholder = 'Search blog posts... (use "t:" for tags only)';
        }
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
        searchInput.placeholder = 'Search blog posts... (use "t:" for tags only)';
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