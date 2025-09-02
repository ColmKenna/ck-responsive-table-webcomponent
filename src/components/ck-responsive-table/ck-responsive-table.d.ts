declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ck-responsive-table': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        'mobile-breakpoint'?: string;
      };
      'ck-responsive-thead': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'ck-responsive-col-head': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        align?: 'left' | 'center' | 'right';
        'mobile-align'?: 'left' | 'center' | 'right';
        'mobile-no-label'?: 'true' | 'false';
      };
      'ck-responsive-tbody': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'ck-responsive-row': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'ck-responsive-col': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        'mobile-direction'?:
          | 'row'
          | 'column'
          | 'row-reverse'
          | 'column-reverse';
        'mobile-justify'?:
          | 'flex-start'
          | 'center'
          | 'flex-end'
          | 'space-between'
          | 'space-around'
          | 'space-evenly';
      };
    }
  }
}

export interface CkResponsiveTable extends HTMLElement {
  /**
   * The viewport width at which the table switches to the mobile layout.
   * @default '600px'
   */
  'mobile-breakpoint'?: string;
}
