import React, { Component } from 'react'

export class Col extends Component {
    toCssCol(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classesCol = ''

        if(cols[0]) classesCol += `col-xs-${cols[0]} `
        if(cols[1]) classesCol += `col-sm-${cols[1]} `
        if(cols[2]) classesCol += `col-md-${cols[2]} `
        if(cols[3]) classesCol += `col-lg-${cols[3]}`

        return classesCol
    }

    toCssOff(numbers) {
        const off = numbers ? numbers.split(' ') : []
        let classesOff = ''

        if(off[0]) classesOff += `offset-xs-${off[0]} `
        if(off[1]) classesOff += `offset-sm-${off[1]} `
        if(off[2]) classesOff += `offset-md-${off[2]} `
        if(off[3]) classesOff += `offset-lg-${off[3]}`

        return classesOff
    }
    
    outherCss(classes) {
        const classe = classes ? classes.split(' ') : []
        let OutherClasses = ''

        classe.map( (elem) => OutherClasses += elem)

        return classes
    }

    render() {
        const gridCol = this.toCssCol(this.props.cols || 12)
        const gridOff = this.toCssOff(this.props.off || 0)
        const outherCss = this.outherCss(this.props.outherCss || '')
        return (
            <div className={`${gridCol} ${gridOff} ${outherCss}`}>
                {this.props.children}
            </div>
        )
    }
}

export class Row extends Component {
    render() {
        return (
            <div className='row'>
                {this.props.children}
            </div>
        )
    }
}