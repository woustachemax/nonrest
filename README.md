# nonrest

🚀 **Create a non-RESTful monorepo in seconds** - WebSocket & HTTP backends, React web app, and React Native mobile app, all in one command.

## Why nonrest?

Stop wasting time configuring monorepos. `nonrest` scaffolds a complete full-stack application with:

- **Real-time first**: WebSocket backend for instant communication
- **HTTP backend**: Traditional REST API when you need it
- **Modern web**: React + Vite with hot module replacement
- **Native mobile**: Expo-powered React Native app
- **Shared packages**: Reusable UI components and business logic
- **pnpm workspace**: Optimized monorepo structure out of the box

Perfect for chat apps, real-time dashboards, collaborative tools, multiplayer games, and any project where WebSocket communication matters.

## Quick Start

```bash
# Install globally
npm install -g nonrest

# Create your project
nonrest my-awesome-app

# Start developing
cd my-awesome-app
pnpm dev
```

That's it! Your full-stack monorepo is ready to go.

## What Gets Created?

```
my-awesome-app/
├── apps/
│   ├── ws-backend/       # WebSocket server
│   ├── http-backend/     # REST API server
│   ├── web/              # React web app (Vite)
│   └── native/           # React Native app (Expo)
├── packages/
│   ├── ui/               # Shared UI components
│   └── lib/              # Shared business logic
├── pnpm-workspace.yaml
└── package.json
```

## Features

- ⚡ **Lightning fast setup** - Complete monorepo in under 2 minutes
- 🔄 **WebSocket ready** - Real-time communication out of the box
- 📱 **Cross-platform** - Web and native mobile from day one
- 🎨 **Shared components** - Write once, use everywhere
- 🛠️ **Modern tooling** - Vite, pnpm, Expo, and more
- 🔥 **Hot reload** - Instant feedback across all apps

## Commands

```bash
# Create a new project
nonrest <project-name>

# Show help
nonrest --help

# Show version
nonrest --version
```

## Requirements

- Node.js 16+ 
- pnpm (will be configured automatically)

## Project Structure Details

### WebSocket Backend (`apps/ws-backend`)
Your real-time server. Perfect for:
- Live chat and messaging
- Real-time notifications
- Collaborative editing
- Live data feeds
- Multiplayer game state

### HTTP Backend (`apps/http-backend`)
Traditional REST API for:
- User authentication
- Database operations
- File uploads
- Third-party integrations

### Web App (`apps/web`)
Modern React application with:
- Vite for blazing fast HMR
- ESLint configured
- Ready to deploy

### Native App (`apps/native`)
React Native with Expo for:
- iOS and Android from one codebase
- Instant updates with Expo
- Easy debugging and testing

### Shared Packages
- `packages/ui`: Reusable React components
- `packages/lib`: Business logic, utilities, and types

## Development Workflow

```bash
# Start all apps in parallel
pnpm dev

# Run specific app
cd apps/web
pnpm dev

# Add dependencies to workspace root
pnpm add -w <package-name>

# Add dependencies to specific app
pnpm add <package-name> --filter web
```

## Tech Stack

- **Package Manager**: pnpm
- **Web Framework**: React 19 + Vite
- **Mobile Framework**: React Native + Expo
- **WebSocket**: ws library
- **HTTP Server**: Express
- **Monorepo**: pnpm workspaces

## Example Use Cases

- 💬 **Chat applications** - Real-time messaging with mobile support
- 📊 **Live dashboards** - Real-time data visualization
- 🎮 **Multiplayer games** - Synchronized game state
- ✏️ **Collaborative tools** - Google Docs-style editing
- 📱 **Social apps** - Web + mobile with shared logic
- 🔔 **Notification systems** - Push and real-time alerts

## Coming Soon

- [ ] TypeScript template option
- [ ] Database integration templates (Prisma, Drizzle)
- [ ] Authentication setup
- [ ] Docker configuration
- [ ] CI/CD templates

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Author

Created with ❤️ for developers who want to move fast and build real-time apps.

---

**Made something cool with nonrest?** Share it with us! We'd love to see what you build.