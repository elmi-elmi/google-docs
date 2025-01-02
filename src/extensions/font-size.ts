import {Extension} from '@tiptap/react'


declare module "@tiptap/core" {
    interface Commands<ReturnType>{
        fontSize: {
            setFontSize: (size: string) => ReturnType,
            unsetFontSize: () => ReturnType,

        }
    }
}

export const FontSizeExtension = Extension.create({
    name: 'fontSize',

    addOptions(){
        return {
            types: ['textStyle']
        }
    },

    addGlobalAttributes(){
        return [
            {
                types: this.options.types,
                attributes: {
                    fontSize: {
                        default: null,
                        parseHTML: (element) => {
                            return {
                                fontSize: element.style.fontSize
                            };
                        },
                        renderHTML: (attributes) => {
                            return {
                                style: `font-size: ${attributes.fontSize}`
                            };
                        }
                    }
                }
            }
        ];
    },

    addCommands(){
        return {
            setFontSize: (size) => ({chain}) => {
                return chain().setMark('textStyle', {fontSize: size}).run(); 
            }, 
            unsetFontSize: () => ({chain}) => { return chain().setMark('textStyle', {fontSize: null}).removeEmptyTextStyle().run(); },
        }    
    }


})

