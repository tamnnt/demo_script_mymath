/* eslint-disable no-undef */
import { html, PolymerElement } from '@polymer/polymer';
import 'katex/dist/katex.min';

class KatexComponent extends PolymerElement {
  static get template() {
    return html`
        <style>
            :host {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .katex-display {
                display: block;
                margin: 1em 0;
                text-align: left;
            }
            .katex-display > .katex {
                display: inline-block;
                text-align: left;
            }
            .katex {
                font: normal 1.21em KaTeX_Main, Times New Roman, serif;
                line-height: 1.2;
                white-space: nowrap;
                text-indent: 0;
                text-rendering: auto;
            }
            .katex * {
                -ms-high-contrast-adjust: none !important;
            }
            .katex .katex-html {
                display: inline-block;
            }
            .katex .katex-mathml {
                position: absolute;
                clip: rect(1px, 1px, 1px, 1px);
                padding: 0;
                border: 0;
                height: 1px;
                width: 1px;
                overflow: hidden;
            }
            .katex .base {
                position: relative;
                display: inline-block;
            }
            .katex .strut {
                display: inline-block;
            }
            .katex .mathrm {
                font-style: normal;
            }
            .katex .textit {
                font-style: italic;
            }
            .katex .mathit {
                font-family: KaTeX_Math;
                font-style: italic;
            }
            .katex .mathbf {
                font-family: KaTeX_Main;
                font-weight: bold;
            }
            .katex .amsrm {
                font-family: KaTeX_AMS;
            }
            .katex .mathbb {
                font-family: KaTeX_AMS;
            }
            .katex .mathcal {
                font-family: KaTeX_Caligraphic;
            }
            .katex .mathfrak {
                font-family: KaTeX_Fraktur;
            }
            .katex .mathtt {
                font-family: KaTeX_Typewriter;
            }
            .katex .mathscr {
                font-family: KaTeX_Script;
            }
            .katex .mathsf {
                font-family: KaTeX_SansSerif;
            }
            .katex .mainit {
                font-family: KaTeX_Main;
                font-style: italic;
            }
            .katex .mainrm {
                font-family: KaTeX_Main;
                font-style: normal;
            }
            .katex .mord + .mop {
                margin-left: 0.16667em;
            }
            .katex .mord + .mbin {
                margin-left: 0.22222em;
            }
            .katex .mord + .mrel {
                margin-left: 0.27778em;
            }
            .katex .mord + .minner {
                margin-left: 0.16667em;
            }
            .katex .mop + .mord {
                margin-left: 0.16667em;
            }
            .katex .mop + .mop {
                margin-left: 0.16667em;
            }
            .katex .mop + .mrel {
                margin-left: 0.27778em;
            }
            .katex .mop + .minner {
                margin-left: 0.16667em;
            }
            .katex .mbin + .mord {
                margin-left: 0.22222em;
            }
            .katex .mbin + .mop {
                margin-left: 0.22222em;
            }
            .katex .mbin + .mopen {
                margin-left: 0.22222em;
            }
            .katex .mbin + .minner {
                margin-left: 0.22222em;
            }
            .katex .mrel + .mord {
                margin-left: 0.27778em;
            }
            .katex .mrel + .mop {
                margin-left: 0.27778em;
            }
            .katex .mrel + .mopen {
                margin-left: 0.27778em;
            }
            .katex .mrel + .minner {
                margin-left: 0.27778em;
            }
            .katex .mclose + .mop {
                margin-left: 0.16667em;
            }
            .katex .mclose + .mbin {
                margin-left: 0.22222em;
            }
            .katex .mclose + .mrel {
                margin-left: 0.27778em;
            }
            .katex .mclose + .minner {
                margin-left: 0.16667em;
            }
            .katex .mpunct + .mord {
                margin-left: 0.16667em;
            }
            .katex .mpunct + .mop {
                margin-left: 0.16667em;
            }
            .katex .mpunct + .mrel {
                margin-left: 0.16667em;
            }
            .katex .mpunct + .mopen {
                margin-left: 0.16667em;
            }
            .katex .mpunct + .mclose {
                margin-left: 0.16667em;
            }
            .katex .mpunct + .mpunct {
                margin-left: 0.16667em;
            }
            .katex .mpunct + .minner {
                margin-left: 0.16667em;
            }
            .katex .minner + .mord {
                margin-left: 0.16667em;
            }
            .katex .minner + .mop {
                margin-left: 0.16667em;
            }
            .katex .minner + .mbin {
                margin-left: 0.22222em;
            }
            .katex .minner + .mrel {
                margin-left: 0.27778em;
            }
            .katex .minner + .mopen {
                margin-left: 0.16667em;
            }
            .katex .minner + .mpunct {
                margin-left: 0.16667em;
            }
            .katex .minner + .minner {
                margin-left: 0.16667em;
            }
            .katex .mord.mtight {
                margin-left: 0;
            }
            .katex .mop.mtight {
                margin-left: 0;
            }
            .katex .mbin.mtight {
                margin-left: 0;
            }
            .katex .mrel.mtight {
                margin-left: 0;
            }
            .katex .mopen.mtight {
                margin-left: 0;
            }
            .katex .mclose.mtight {
                margin-left: 0;
            }
            .katex .mpunct.mtight {
                margin-left: 0;
            }
            .katex .minner.mtight {
                margin-left: 0;
            }
            .katex .mord + .mop.mtight {
                margin-left: 0.16667em;
            }
            .katex .mop + .mord.mtight {
                margin-left: 0.16667em;
            }
            .katex .mop + .mop.mtight {
                margin-left: 0.16667em;
            }
            .katex .mclose + .mop.mtight {
                margin-left: 0.16667em;
            }
            .katex .minner + .mop.mtight {
                margin-left: 0.16667em;
            }
            .katex .vlist-t {
                display: inline-table;
                table-layout: fixed;
            }
            .katex .vlist-r {
                display: table-row;
            }
            .katex .vlist {
                display: table-cell;
                vertical-align: bottom;
                position: relative;
            }
            .katex .vlist > span {
                display: block;
                height: 0;
                position: relative;
            }
            .katex .vlist > span > span {
                display: inline-block;
            }
            .katex .vlist > span > .pstrut {
                overflow: hidden;
                width: 0;
            }
            .katex .vlist-t2 {
                margin-right: -2px;
            }
            .katex .vlist-s {
                display: table-cell;
                vertical-align: bottom;
                font-size: 1px;
                width: 2px;
            }
            .katex .msupsub {
                text-align: left;
            }
            .katex .mfrac > span > span {
                text-align: center;
            }
            .katex .mfrac .frac-line {
                display: inline-block;
                width: 100%;
                border-bottom-style: solid;
            }
            .katex .mspace {
                display: inline-block;
            }
            .katex .mspace.negativethinspace {
                margin-left: -0.16667em;
            }
            .katex .mspace.thinspace {
                width: 0.16667em;
            }
            .katex .mspace.negativemediumspace {
                margin-left: -0.22222em;
            }
            .katex .mspace.mediumspace {
                width: 0.22222em;
            }
            .katex .mspace.thickspace {
                width: 0.27778em;
            }
            .katex .mspace.sixmuspace {
                width: 0.333333em;
            }
            .katex .mspace.eightmuspace {
                width: 0.444444em;
            }
            .katex .mspace.enspace {
                width: 0.5em;
            }
            .katex .mspace.twelvemuspace {
                width: 0.666667em;
            }
            .katex .mspace.quad {
                width: 1em;
            }
            .katex .mspace.qquad {
                width: 2em;
            }
            .katex .llap,
            .katex .rlap {
                width: 0;
                position: relative;
            }
            .katex .llap > .inner,
            .katex .rlap > .inner {
                position: absolute;
            }
            .katex .llap > .fix,
            .katex .rlap > .fix {
                display: inline-block;
            }
            .katex .llap > .inner {
                right: 0;
            }
            .katex .rlap > .inner {
                left: 0;
            }
            .katex .katex-logo .a {
                font-size: 0.75em;
                margin-left: -0.32em;
                position: relative;
                top: -0.2em;
            }
            .katex .katex-logo .t {
                margin-left: -0.23em;
            }
            .katex .katex-logo .e {
                margin-left: -0.1667em;
                position: relative;
                top: 0.2155em;
            }
            .katex .katex-logo .x {
                margin-left: -0.125em;
            }
            .katex .rule {
                display: inline-block;
                border: solid 0;
                position: relative;
            }
            .katex .overline .overline-line,
            .katex .underline .underline-line {
                display: inline-block;
                width: 100%;
                border-bottom-style: solid;
            }
            .katex .sqrt > .root {
                margin-left: 0.27777778em;
                margin-right: -0.55555556em;
            }
            .katex .sizing,
            .katex .fontsize-ensurer {
                display: inline-block;
            }
            .katex .sizing.reset-size1.size1,
            .katex .fontsize-ensurer.reset-size1.size1 {
                font-size: 1em;
            }
            .katex .sizing.reset-size1.size2,
            .katex .fontsize-ensurer.reset-size1.size2 {
                font-size: 1.2em;
            }
            .katex .sizing.reset-size1.size3,
            .katex .fontsize-ensurer.reset-size1.size3 {
                font-size: 1.4em;
            }
            .katex .sizing.reset-size1.size4,
            .katex .fontsize-ensurer.reset-size1.size4 {
                font-size: 1.6em;
            }
            .katex .sizing.reset-size1.size5,
            .katex .fontsize-ensurer.reset-size1.size5 {
                font-size: 1.8em;
            }
            .katex .sizing.reset-size1.size6,
            .katex .fontsize-ensurer.reset-size1.size6 {
                font-size: 2em;
            }
            .katex .sizing.reset-size1.size7,
            .katex .fontsize-ensurer.reset-size1.size7 {
                font-size: 2.4em;
            }
            .katex .sizing.reset-size1.size8,
            .katex .fontsize-ensurer.reset-size1.size8 {
                font-size: 2.88em;
            }
            .katex .sizing.reset-size1.size9,
            .katex .fontsize-ensurer.reset-size1.size9 {
                font-size: 3.456em;
            }
            .katex .sizing.reset-size1.size10,
            .katex .fontsize-ensurer.reset-size1.size10 {
                font-size: 4.148em;
            }
            .katex .sizing.reset-size1.size11,
            .katex .fontsize-ensurer.reset-size1.size11 {
                font-size: 4.976em;
            }
            .katex .sizing.reset-size2.size1,
            .katex .fontsize-ensurer.reset-size2.size1 {
                font-size: 0.83333333em;
            }
            .katex .sizing.reset-size2.size2,
            .katex .fontsize-ensurer.reset-size2.size2 {
                font-size: 1em;
            }
            .katex .sizing.reset-size2.size3,
            .katex .fontsize-ensurer.reset-size2.size3 {
                font-size: 1.16666667em;
            }
            .katex .sizing.reset-size2.size4,
            .katex .fontsize-ensurer.reset-size2.size4 {
                font-size: 1.33333333em;
            }
            .katex .sizing.reset-size2.size5,
            .katex .fontsize-ensurer.reset-size2.size5 {
                font-size: 1.5em;
            }
            .katex .sizing.reset-size2.size6,
            .katex .fontsize-ensurer.reset-size2.size6 {
                font-size: 1.66666667em;
            }
            .katex .sizing.reset-size2.size7,
            .katex .fontsize-ensurer.reset-size2.size7 {
                font-size: 2em;
            }
            .katex .sizing.reset-size2.size8,
            .katex .fontsize-ensurer.reset-size2.size8 {
                font-size: 2.4em;
            }
            .katex .sizing.reset-size2.size9,
            .katex .fontsize-ensurer.reset-size2.size9 {
                font-size: 2.88em;
            }
            .katex .sizing.reset-size2.size10,
            .katex .fontsize-ensurer.reset-size2.size10 {
                font-size: 3.45666667em;
            }
            .katex .sizing.reset-size2.size11,
            .katex .fontsize-ensurer.reset-size2.size11 {
                font-size: 4.14666667em;
            }
            .katex .sizing.reset-size3.size1,
            .katex .fontsize-ensurer.reset-size3.size1 {
                font-size: 0.71428571em;
            }
            .katex .sizing.reset-size3.size2,
            .katex .fontsize-ensurer.reset-size3.size2 {
                font-size: 0.85714286em;
            }
            .katex .sizing.reset-size3.size3,
            .katex .fontsize-ensurer.reset-size3.size3 {
                font-size: 1em;
            }
            .katex .sizing.reset-size3.size4,
            .katex .fontsize-ensurer.reset-size3.size4 {
                font-size: 1.14285714em;
            }
            .katex .sizing.reset-size3.size5,
            .katex .fontsize-ensurer.reset-size3.size5 {
                font-size: 1.28571429em;
            }
            .katex .sizing.reset-size3.size6,
            .katex .fontsize-ensurer.reset-size3.size6 {
                font-size: 1.42857143em;
            }
            .katex .sizing.reset-size3.size7,
            .katex .fontsize-ensurer.reset-size3.size7 {
                font-size: 1.71428571em;
            }
            .katex .sizing.reset-size3.size8,
            .katex .fontsize-ensurer.reset-size3.size8 {
                font-size: 2.05714286em;
            }
            .katex .sizing.reset-size3.size9,
            .katex .fontsize-ensurer.reset-size3.size9 {
                font-size: 2.46857143em;
            }
            .katex .sizing.reset-size3.size10,
            .katex .fontsize-ensurer.reset-size3.size10 {
                font-size: 2.96285714em;
            }
            .katex .sizing.reset-size3.size11,
            .katex .fontsize-ensurer.reset-size3.size11 {
                font-size: 3.55428571em;
            }
            .katex .sizing.reset-size4.size1,
            .katex .fontsize-ensurer.reset-size4.size1 {
                font-size: 0.625em;
            }
            .katex .sizing.reset-size4.size2,
            .katex .fontsize-ensurer.reset-size4.size2 {
                font-size: 0.75em;
            }
            .katex .sizing.reset-size4.size3,
            .katex .fontsize-ensurer.reset-size4.size3 {
                font-size: 0.875em;
            }
            .katex .sizing.reset-size4.size4,
            .katex .fontsize-ensurer.reset-size4.size4 {
                font-size: 1em;
            }
            .katex .sizing.reset-size4.size5,
            .katex .fontsize-ensurer.reset-size4.size5 {
                font-size: 1.125em;
            }
            .katex .sizing.reset-size4.size6,
            .katex .fontsize-ensurer.reset-size4.size6 {
                font-size: 1.25em;
            }
            .katex .sizing.reset-size4.size7,
            .katex .fontsize-ensurer.reset-size4.size7 {
                font-size: 1.5em;
            }
            .katex .sizing.reset-size4.size8,
            .katex .fontsize-ensurer.reset-size4.size8 {
                font-size: 1.8em;
            }
            .katex .sizing.reset-size4.size9,
            .katex .fontsize-ensurer.reset-size4.size9 {
                font-size: 2.16em;
            }
            .katex .sizing.reset-size4.size10,
            .katex .fontsize-ensurer.reset-size4.size10 {
                font-size: 2.5925em;
            }
            .katex .sizing.reset-size4.size11,
            .katex .fontsize-ensurer.reset-size4.size11 {
                font-size: 3.11em;
            }
            .katex .sizing.reset-size5.size1,
            .katex .fontsize-ensurer.reset-size5.size1 {
                font-size: 0.55555556em;
            }
            .katex .sizing.reset-size5.size2,
            .katex .fontsize-ensurer.reset-size5.size2 {
                font-size: 0.66666667em;
            }
            .katex .sizing.reset-size5.size3,
            .katex .fontsize-ensurer.reset-size5.size3 {
                font-size: 0.77777778em;
            }
            .katex .sizing.reset-size5.size4,
            .katex .fontsize-ensurer.reset-size5.size4 {
                font-size: 0.88888889em;
            }
            .katex .sizing.reset-size5.size5,
            .katex .fontsize-ensurer.reset-size5.size5 {
                font-size: 1em;
            }
            .katex .sizing.reset-size5.size6,
            .katex .fontsize-ensurer.reset-size5.size6 {
                font-size: 1.11111111em;
            }
            .katex .sizing.reset-size5.size7,
            .katex .fontsize-ensurer.reset-size5.size7 {
                font-size: 1.33333333em;
            }
            .katex .sizing.reset-size5.size8,
            .katex .fontsize-ensurer.reset-size5.size8 {
                font-size: 1.6em;
            }
            .katex .sizing.reset-size5.size9,
            .katex .fontsize-ensurer.reset-size5.size9 {
                font-size: 1.92em;
            }
            .katex .sizing.reset-size5.size10,
            .katex .fontsize-ensurer.reset-size5.size10 {
                font-size: 2.30444444em;
            }
            .katex .sizing.reset-size5.size11,
            .katex .fontsize-ensurer.reset-size5.size11 {
                font-size: 2.76444444em;
            }
            .katex .sizing.reset-size6.size1,
            .katex .fontsize-ensurer.reset-size6.size1 {
                font-size: 0.5em;
            }
            .katex .sizing.reset-size6.size2,
            .katex .fontsize-ensurer.reset-size6.size2 {
                font-size: 0.6em;
            }
            .katex .sizing.reset-size6.size3,
            .katex .fontsize-ensurer.reset-size6.size3 {
                font-size: 0.7em;
            }
            .katex .sizing.reset-size6.size4,
            .katex .fontsize-ensurer.reset-size6.size4 {
                font-size: 0.8em;
            }
            .katex .sizing.reset-size6.size5,
            .katex .fontsize-ensurer.reset-size6.size5 {
                font-size: 0.9em;
            }
            .katex .sizing.reset-size6.size6,
            .katex .fontsize-ensurer.reset-size6.size6 {
                font-size: 1em;
            }
            .katex .sizing.reset-size6.size7,
            .katex .fontsize-ensurer.reset-size6.size7 {
                font-size: 1.2em;
            }
            .katex .sizing.reset-size6.size8,
            .katex .fontsize-ensurer.reset-size6.size8 {
                font-size: 1.44em;
            }
            .katex .sizing.reset-size6.size9,
            .katex .fontsize-ensurer.reset-size6.size9 {
                font-size: 1.728em;
            }
            .katex .sizing.reset-size6.size10,
            .katex .fontsize-ensurer.reset-size6.size10 {
                font-size: 2.074em;
            }
            .katex .sizing.reset-size6.size11,
            .katex .fontsize-ensurer.reset-size6.size11 {
                font-size: 2.488em;
            }
            .katex .sizing.reset-size7.size1,
            .katex .fontsize-ensurer.reset-size7.size1 {
                font-size: 0.41666667em;
            }
            .katex .sizing.reset-size7.size2,
            .katex .fontsize-ensurer.reset-size7.size2 {
                font-size: 0.5em;
            }
            .katex .sizing.reset-size7.size3,
            .katex .fontsize-ensurer.reset-size7.size3 {
                font-size: 0.58333333em;
            }
            .katex .sizing.reset-size7.size4,
            .katex .fontsize-ensurer.reset-size7.size4 {
                font-size: 0.66666667em;
            }
            .katex .sizing.reset-size7.size5,
            .katex .fontsize-ensurer.reset-size7.size5 {
                font-size: 0.75em;
            }
            .katex .sizing.reset-size7.size6,
            .katex .fontsize-ensurer.reset-size7.size6 {
                font-size: 0.83333333em;
            }
            .katex .sizing.reset-size7.size7,
            .katex .fontsize-ensurer.reset-size7.size7 {
                font-size: 1em;
            }
            .katex .sizing.reset-size7.size8,
            .katex .fontsize-ensurer.reset-size7.size8 {
                font-size: 1.2em;
            }
            .katex .sizing.reset-size7.size9,
            .katex .fontsize-ensurer.reset-size7.size9 {
                font-size: 1.44em;
            }
            .katex .sizing.reset-size7.size10,
            .katex .fontsize-ensurer.reset-size7.size10 {
                font-size: 1.72833333em;
            }
            .katex .sizing.reset-size7.size11,
            .katex .fontsize-ensurer.reset-size7.size11 {
                font-size: 2.07333333em;
            }
            .katex .sizing.reset-size8.size1,
            .katex .fontsize-ensurer.reset-size8.size1 {
                font-size: 0.34722222em;
            }
            .katex .sizing.reset-size8.size2,
            .katex .fontsize-ensurer.reset-size8.size2 {
                font-size: 0.41666667em;
            }
            .katex .sizing.reset-size8.size3,
            .katex .fontsize-ensurer.reset-size8.size3 {
                font-size: 0.48611111em;
            }
            .katex .sizing.reset-size8.size4,
            .katex .fontsize-ensurer.reset-size8.size4 {
                font-size: 0.55555556em;
            }
            .katex .sizing.reset-size8.size5,
            .katex .fontsize-ensurer.reset-size8.size5 {
                font-size: 0.625em;
            }
            .katex .sizing.reset-size8.size6,
            .katex .fontsize-ensurer.reset-size8.size6 {
                font-size: 0.69444444em;
            }
            .katex .sizing.reset-size8.size7,
            .katex .fontsize-ensurer.reset-size8.size7 {
                font-size: 0.83333333em;
            }
            .katex .sizing.reset-size8.size8,
            .katex .fontsize-ensurer.reset-size8.size8 {
                font-size: 1em;
            }
            .katex .sizing.reset-size8.size9,
            .katex .fontsize-ensurer.reset-size8.size9 {
                font-size: 1.2em;
            }
            .katex .sizing.reset-size8.size10,
            .katex .fontsize-ensurer.reset-size8.size10 {
                font-size: 1.44027778em;
            }
            .katex .sizing.reset-size8.size11,
            .katex .fontsize-ensurer.reset-size8.size11 {
                font-size: 1.72777778em;
            }
            .katex .sizing.reset-size9.size1,
            .katex .fontsize-ensurer.reset-size9.size1 {
                font-size: 0.28935185em;
            }
            .katex .sizing.reset-size9.size2,
            .katex .fontsize-ensurer.reset-size9.size2 {
                font-size: 0.34722222em;
            }
            .katex .sizing.reset-size9.size3,
            .katex .fontsize-ensurer.reset-size9.size3 {
                font-size: 0.40509259em;
            }
            .katex .sizing.reset-size9.size4,
            .katex .fontsize-ensurer.reset-size9.size4 {
                font-size: 0.46296296em;
            }
            .katex .sizing.reset-size9.size5,
            .katex .fontsize-ensurer.reset-size9.size5 {
                font-size: 0.52083333em;
            }
            .katex .sizing.reset-size9.size6,
            .katex .fontsize-ensurer.reset-size9.size6 {
                font-size: 0.5787037em;
            }
            .katex .sizing.reset-size9.size7,
            .katex .fontsize-ensurer.reset-size9.size7 {
                font-size: 0.69444444em;
            }
            .katex .sizing.reset-size9.size8,
            .katex .fontsize-ensurer.reset-size9.size8 {
                font-size: 0.83333333em;
            }
            .katex .sizing.reset-size9.size9,
            .katex .fontsize-ensurer.reset-size9.size9 {
                font-size: 1em;
            }
            .katex .sizing.reset-size9.size10,
            .katex .fontsize-ensurer.reset-size9.size10 {
                font-size: 1.20023148em;
            }
            .katex .sizing.reset-size9.size11,
            .katex .fontsize-ensurer.reset-size9.size11 {
                font-size: 1.43981481em;
            }
            .katex .sizing.reset-size10.size1,
            .katex .fontsize-ensurer.reset-size10.size1 {
                font-size: 0.24108004em;
            }
            .katex .sizing.reset-size10.size2,
            .katex .fontsize-ensurer.reset-size10.size2 {
                font-size: 0.28929605em;
            }
            .katex .sizing.reset-size10.size3,
            .katex .fontsize-ensurer.reset-size10.size3 {
                font-size: 0.33751205em;
            }
            .katex .sizing.reset-size10.size4,
            .katex .fontsize-ensurer.reset-size10.size4 {
                font-size: 0.38572806em;
            }
            .katex .sizing.reset-size10.size5,
            .katex .fontsize-ensurer.reset-size10.size5 {
                font-size: 0.43394407em;
            }
            .katex .sizing.reset-size10.size6,
            .katex .fontsize-ensurer.reset-size10.size6 {
                font-size: 0.48216008em;
            }
            .katex .sizing.reset-size10.size7,
            .katex .fontsize-ensurer.reset-size10.size7 {
                font-size: 0.57859209em;
            }
            .katex .sizing.reset-size10.size8,
            .katex .fontsize-ensurer.reset-size10.size8 {
                font-size: 0.69431051em;
            }
            .katex .sizing.reset-size10.size9,
            .katex .fontsize-ensurer.reset-size10.size9 {
                font-size: 0.83317261em;
            }
            .katex .sizing.reset-size10.size10,
            .katex .fontsize-ensurer.reset-size10.size10 {
                font-size: 1em;
            }
            .katex .sizing.reset-size10.size11,
            .katex .fontsize-ensurer.reset-size10.size11 {
                font-size: 1.19961427em;
            }
            .katex .sizing.reset-size11.size1,
            .katex .fontsize-ensurer.reset-size11.size1 {
                font-size: 0.20096463em;
            }
            .katex .sizing.reset-size11.size2,
            .katex .fontsize-ensurer.reset-size11.size2 {
                font-size: 0.24115756em;
            }
            .katex .sizing.reset-size11.size3,
            .katex .fontsize-ensurer.reset-size11.size3 {
                font-size: 0.28135048em;
            }
            .katex .sizing.reset-size11.size4,
            .katex .fontsize-ensurer.reset-size11.size4 {
                font-size: 0.32154341em;
            }
            .katex .sizing.reset-size11.size5,
            .katex .fontsize-ensurer.reset-size11.size5 {
                font-size: 0.36173633em;
            }
            .katex .sizing.reset-size11.size6,
            .katex .fontsize-ensurer.reset-size11.size6 {
                font-size: 0.40192926em;
            }
            .katex .sizing.reset-size11.size7,
            .katex .fontsize-ensurer.reset-size11.size7 {
                font-size: 0.48231511em;
            }
            .katex .sizing.reset-size11.size8,
            .katex .fontsize-ensurer.reset-size11.size8 {
                font-size: 0.57877814em;
            }
            .katex .sizing.reset-size11.size9,
            .katex .fontsize-ensurer.reset-size11.size9 {
                font-size: 0.69453376em;
            }
            .katex .sizing.reset-size11.size10,
            .katex .fontsize-ensurer.reset-size11.size10 {
                font-size: 0.83360129em;
            }
            .katex .sizing.reset-size11.size11,
            .katex .fontsize-ensurer.reset-size11.size11 {
                font-size: 1em;
            }
            .katex .delimsizing.size1 {
                font-family: KaTeX_Size1;
            }
            .katex .delimsizing.size2 {
                font-family: KaTeX_Size2;
            }
            .katex .delimsizing.size3 {
                font-family: KaTeX_Size3;
            }
            .katex .delimsizing.size4 {
                font-family: KaTeX_Size4;
            }
            .katex .delimsizing.mult .delim-size1 > span {
                font-family: KaTeX_Size1;
            }
            .katex .delimsizing.mult .delim-size4 > span {
                font-family: KaTeX_Size4;
            }
            .katex .nulldelimiter {
                display: inline-block;
                width: 0.12em;
            }
            .katex .delimcenter {
                position: relative;
            }
            .katex .op-symbol {
                position: relative;
            }
            .katex .op-symbol.small-op {
                font-family: KaTeX_Size1;
            }
            .katex .op-symbol.large-op {
                font-family: KaTeX_Size2;
            }
            .katex .op-limits > .vlist-t {
                text-align: center;
            }
            .katex .accent > .vlist-t {
                text-align: center;
            }
            .katex .accent .accent-body > span {
                width: 0;
            }
            .katex .accent .accent-body.accent-vec > span {
                position: relative;
                left: 0.326em;
            }
            .katex .accent .accent-body.accent-hungarian > span {
                position: relative;
                left: 0.250em;
            }
            .katex .mtable .vertical-separator {
                display: inline-block;
                margin: 0 -0.025em;
                border-right: 0.05em solid black;
            }
            .katex .mtable .arraycolsep {
                display: inline-block;
            }
            .katex .mtable .col-align-c > .vlist-t {
                text-align: center;
            }
            .katex .mtable .col-align-l > .vlist-t {
                text-align: left;
            }
            .katex .mtable .col-align-r > .vlist-t {
                text-align: left;
            }
            .katex .svg-align {
                text-align: left;
            }
            .katex svg {
                display: block;
                position: absolute;
                width: 100%;
            }
            .katex svg path {
                fill: currentColor;
            }
            .katex svg line {
                stroke: currentColor;
            }
            .katex .stretchy {
                width: 100%;
                display: block;
            }
            .katex .stretchy:before,
            .katex .stretchy:after {
                content: "";
            }
            .katex .x-arrow-pad {
                padding: 0 0.5em;
            }
            .katex .x-arrow,
            .katex .mover,
            .katex .munder {
                text-align: center;
            }
            .katex .boxpad {
                padding: 0 0.3em 0 0.3em;
            }
            .katex .fbox {
                box-sizing: border-box;
                border: 0.04em solid black;
            }
            .katex .cancel-pad {
                padding: 0 0.2em 0 0.2em;
            }
            .katex .mord + .cancel-lap,
            .katex .mbin + .cancel-lap {
                margin-left: -0.2em;
            }
            .katex .cancel-lap + .mord,
            .katex .cancel-lap + .mbin,
            .katex .cancel-lap + .msupsub {
                margin-left: -0.2em;
            }
            .katex .sout {
                border-bottom-style: solid;
                border-bottom-width: 0.08em;
            }
        </style>
        <div id="exports"></div>
`;
  }

  static get is() {
    return 'katex-component';
  }

  static get properties() {
    return {
      value: {
        type: String,
        notify: true,
        reflectToAttribute: true,
        observer: '_valueChanged',
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.render = this.shadowRoot.querySelector('#exports');
  }

  _valueChanged(value) {
    this.render.innerText = '';
    if (value) {
      // Updating the rendering zone displayed with KaTex (taking the latex export as an input)
      try {
        katex.render(value, this.render);
      } catch (e) {
        this.render.innerText = value;
      }
    }
  }
}

customElements.define(KatexComponent.is, KatexComponent);
