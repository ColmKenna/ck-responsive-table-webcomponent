
# ck-responsive-table: Technical Documentation

## Architecture Overview

The `ck-responsive-table` component is designed to progressively enhance a declarative, custom HTML structure into a fully responsive standard `<table>`. It does not use Shadow DOM, instead manipulating the Light DOM directly. On `connectedCallback`, it reads its own content and attributes, constructs a `<table>` element in memory, and then replaces itself with the generated table.

This approach was chosen to ensure maximum style compatibility with existing global stylesheets and CSS frameworks. By rendering a standard `<table>` in the main document, it can inherit styles from sources like Bootstrap, Foundation, or custom site-wide stylesheets without any special configuration.

## Implementation Details

- **DOM Transformation**: The component's primary logic resides in the `connectedCallback`. It parses its children (`ck-responsive-thead`, `ck-responsive-tbody`, etc.) and builds a standard `<thead>` and `<tbody>` structure. This transformation happens only once, controlled by an `__initialized` flag.
- **Attribute Forwarding**: All attributes on the `<ck-responsive-table>` element are copied to the generated `<table>` element, allowing developers to pass classes, IDs, and other table-specific attributes.

## CSS Architecture

The component's styling strategy is twofold:

1.  **Global Base Styles**: A small set of global utility classes (`.align-left`, etc.) is injected into the document's `adoptedStyleSheets` if the browser supports Constructable Stylesheets. This is done only once. For older browsers, a `<style>` tag is appended to the `<head>` as a fallback. This provides a shared, efficient base for all component instances.

2.  **Per-Instance Scoped Styles**: To support the `mobile-breakpoint` attribute, each table instance generates its own unique CSS block. This block contains the media query and responsive styles. A unique class (e.g., `responsive-table-1`) is added to the generated `<table>` to scope these styles, preventing them from affecting other tables on the page. This CSS block is injected as a `<style>` element into the `<head>`.

This hybrid approach deviates from a pure Shadow DOM encapsulation model. The key reasons are:
- **Dynamic Media Queries**: The `mobile-breakpoint` is configurable per instance, which requires generating instance-specific CSS. Injecting this into the head is a straightforward way to achieve this without the complexity of managing styles inside a Shadow DOM for this use case.
- **Inheritance**: As mentioned, avoiding Shadow DOM allows the table to seamlessly inherit global styles.

## Known Limitations

- **Head Pollution**: Each instance of `ck-responsive-table` adds a `<style>` element to the document's `<head>`. While small, this could become a performance concern if hundreds of tables are present on a single page.
- **No Encapsulation**: Because the component operates in the Light DOM, it is susceptible to style conflicts from global stylesheets. This is intentional, but developers should be aware that their global styles for `table`, `tr`, `td`, etc., will affect this component.
