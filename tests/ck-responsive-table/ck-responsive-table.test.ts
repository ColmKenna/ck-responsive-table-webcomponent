import '../../src/components/ck-responsive-table/ck-responsive-table';

document.body.innerHTML = `
  <ck-responsive-table id="test-table" mobile-breakpoint="700px">
    <ck-responsive-thead>
      <ck-responsive-col-head>Name</ck-responsive-col-head>
      <ck-responsive-col-head mobile-no-label="true">Action</ck-responsive-col-head>
    </ck-responsive-thead>
    <ck-responsive-tbody>
      <ck-responsive-row>
        <ck-responsive-col>John</ck-responsive-col>
        <ck-responsive-col><button>Delete</button></ck-responsive-col>
      </ck-responsive-row>
    </ck-responsive-tbody>
  </ck-responsive-table>
`;

describe('CkResponsiveTable', () => {
  it('should transform the custom element into a table', () => {
    const table = document.querySelector('#test-table');
    expect(table).not.toBeNull();
    expect(table?.tagName).toBe('TABLE');
  });

  it('should generate css with the correct mobile breakpoint', () => {
    const styles = Array.from(document.querySelectorAll('style'));
    const styleContents = styles.map(s => s.textContent).join('');
    expect(styleContents).toContain('@media (max-width: 700px)');
  });

  it('should create mobile labels for cells', () => {
    const table = document.querySelector('#test-table');
    const cell = table?.querySelector('td');
    const label = cell?.querySelector('span.small-screen-only');
    expect(label).not.toBeNull();
    expect(label?.textContent).toBe('Name');
  });

  it('should not create a mobile label when mobile-no-label is true', () => {
    const table = document.querySelector('#test-table');
    const cell = table?.querySelectorAll('td')[1];
    const label = cell?.querySelector('span.small-screen-only');
    expect(label).toBeNull();
  });
});
