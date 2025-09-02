# Responsive Table Web Component

A modern web component that provides a responsive HTML table, built with TypeScript and Rollup. It is designed to be lightweight, reusable, and easy to integrate into any web project.

## 🚀 Features

- **Responsive Table**: Renders a standard `<table>` on desktop and a card-like layout on mobile.
- **Declarative Syntax**: Uses custom elements for easy and readable table structure.
- **Customizable Breakpoint**: Allows setting a custom breakpoint for the mobile layout.
- **Modern Web Components**: Built using native Custom Elements API.
- **TypeScript Support**: Full TypeScript definitions included.
- **Multiple Build Formats**: UMD and ES modules.

## 🔗 Project Links

- Repository: https://github.com/ColmKenna/ck-responsive-table-webcomponent
- Issues: https://github.com/ColmKenna/ck-responsive-table-webcomponent/issues
- Homepage: https://github.com/ColmKenna/ck-responsive-table-webcomponent#readme

## 📦 Installation

### Via GitHub Packages

First, configure npm to use GitHub Packages for this scope. Create or update your `.npmrc` file:

```
@colmkenna:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

Then install the package:

```bash
npm install @colmkenna/ck-responsive-table-webcomponent
```

### Via CDN (if published to a CDN)

```html
<script src="https://unpkg.com/@colmkenna/ck-responsive-table-webcomponent@latest/dist/index.min.js"></script>
```

## 🧩 Component Usage

```html
<script type="module" src="/dist/index.esm.js"></script>

<ck-responsive-table class="table" mobile-breakpoint="768px">
  <ck-responsive-thead>
    <ck-responsive-col-head>Name</ck-responsive-col-head>
    <ck-responsive-col-head align="center">Age</ck-responsive-col-head>
  </ck-responsive-thead>
  <ck-responsive-tbody>
    <ck-responsive-row>
      <ck-responsive-col>John Doe</ck-responsive-col>
      <ck-responsive-col>42</ck-responsive-col>
    </ck-responsive-row>
  </ck-responsive-tbody>
</ck-responsive-table>
```

For more examples, see the [demo page](examples/ck-responsive-table/demo.html).

## 🛠️ Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/ColmKenna/ck-responsive-table-webcomponent.git
cd ck-responsive-table-webcomponent
```

2. Install dependencies:
```bash
npm install
```

3. Start development mode:
```bash
npm run dev
```

### Available Scripts

- `npm run build` - Build the library for production
- `npm run dev` - Build in watch mode for development
- `npm run serve` - Serve the project root on localhost:8080
- `npm run clean` - Clean the dist folder
- `npm test` - Run tests

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions and support, please open an issue on GitHub.
