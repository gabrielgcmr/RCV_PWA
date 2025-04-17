//src/core/clinicalHistory/utils
import { Node } from 'prosemirror-model';
export interface NodeWithPosition {
    pos: number;
    node: Node;
  }
  
  /**
   * Finds a node with a specific attribute in a ProseMirror document
   * 
   * @param doc - The ProseMirror document to search
   * @param attrName - The attribute name to look for
   * @param attrValue - The attribute value to match
   * @returns NodeWithPosition | null - The found node with its position or null if not found
   */
  export function findNodeWithAttr(
    doc: Node,
    attrName: string,
    attrValue: string
  ): NodeWithPosition | null {
    let result: {node: Node; pos: number} | null = null;
  
    doc.descendants((node: Node, pos: number) => {
      if (node.attrs?.[attrName] === attrValue) {
        result = { node, pos };
        return false; // Stop searching
      }
      return true; // Continue searching
    });
  
    return result;
  }

