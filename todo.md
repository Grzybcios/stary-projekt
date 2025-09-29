# Admin Panel MVP Implementation Plan

## Core Features to Implement:
1. **Theme System** - Light/Dark mode with purple color schemes
2. **Layout Components** - Sidebar navigation, header, main content area
3. **Dashboard Page** - Statistics cards, charts, recent activity
4. **User Management** - User list, add/edit users
5. **Reports/Analytics** - Basic charts and data visualization
6. **Settings** - System configuration options

## Files to Create/Modify:
1. `src/lib/theme-context.tsx` - Theme provider and context
2. `src/components/layout/Sidebar.tsx` - Navigation sidebar
3. `src/components/layout/Header.tsx` - Top header with theme toggle
4. `src/components/layout/AdminLayout.tsx` - Main layout wrapper
5. `src/pages/Dashboard.tsx` - Dashboard with statistics
6. `src/pages/Users.tsx` - User management page
7. `src/pages/Reports.tsx` - Reports and analytics
8. `src/pages/Settings.tsx` - Settings page
9. `src/App.tsx` - Update routing and theme provider
10. `src/index.css` - Custom CSS variables for purple themes
11. `index.html` - Update title

## Color Scheme:
- Light mode: White backgrounds with purple accents (#8b5cf6, #a855f7)
- Dark mode: Dark backgrounds with purple accents (#1f2937, #111827 with purple highlights)

## Key Components Used:
- Sidebar with navigation items
- Cards for statistics
- Tables for user management
- Charts for analytics
- Theme toggle button
- Responsive design with mobile support