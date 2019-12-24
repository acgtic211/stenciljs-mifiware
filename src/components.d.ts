/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface AppRoot {
    'id': string;
    'service_url': string;
    'type': string;
  }
  interface AppRootAttributes extends StencilHTMLAttributes {
    'id'?: string;
    'service_url'?: string;
    'type'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppRoot': Components.AppRoot;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
  }


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
