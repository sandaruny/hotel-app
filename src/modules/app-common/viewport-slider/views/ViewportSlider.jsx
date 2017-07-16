import React from 'react';
// `import $ from 'jquery';
import catslider from 'catslider';
//
// (function( $, window, undefined ) {
//
//   'use strict';
//
//   $.CatSlider = function( options, element ) {
//     this.$el = $( element );
//     this._init( options );
//     };
//
//   $.CatSlider.prototype = {
//
//     _init : function( options ) {
//
//       // the categories (ul)
//       this.$categories = this.$el.children( 'ul' );
//       // the navigation
//       this.$navcategories = this.$el.find( 'nav > a' );
//       var animEndEventNames = {
//         'WebkitAnimation' : 'webkitAnimationEnd',
//         'OAnimation' : 'oAnimationEnd',
//         'msAnimation' : 'MSAnimationEnd',
//         'animation' : 'animationend'
//         };
//       // animation end event name
//       this.animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
//       // animations and transforms support
//       this.support = Modernizr.csstransforms && Modernizr.cssanimations;
//       // if currently animating
//       this.isAnimating = false;
//       // current category
//       this.current = 0;
//       var $currcat = this.$categories.eq( 0 );
//       if( !this.support ) {
//         this.$categories.hide();
//         $currcat.show();
//         }
//       else {
//         $currcat.addClass( 'mi-current' );
//         }
//       // current nav category
//       this.$navcategories.eq( 0 ).addClass( 'mi-selected' );
//       // initialize the events
//       this._initEvents();
//
//       },
//     _initEvents : function() {
//
//       var self = this;
//       this.$navcategories.on( 'click.catslider', function() {
//         self.showCategory( $( this ).index() );
//         return false;
//         } );
//
//       // reset on window resize..
//       $( window ).on( 'resize', function() {
//         self.$categories.removeClass().eq( 0 ).addClass( 'mi-current' );
//         self.$navcategories.eq( self.current ).removeClass( 'mi-selected' ).end().eq( 0 ).addClass( 'mi-selected' );
//         self.current = 0;
//         } );
//
//       },
//     showCategory : function( catidx ) {
//
//       if( catidx === this.current || this.isAnimating ) {
//         return false;
//         }
//       this.isAnimating = true;
//       // update selected navigation
//       this.$navcategories.eq( this.current ).removeClass( 'mi-selected' ).end().eq( catidx ).addClass( 'mi-selected' );
//
//       var dir = catidx > this.current ? 'right' : 'left',
//         toClass = dir === 'right' ? 'mi-moveToLeft' : 'mi-moveToRight',
//         fromClass = dir === 'right' ? 'mi-moveFromRight' : 'mi-moveFromLeft',
//         // current category
//         $currcat = this.$categories.eq( this.current ),
//         // new category
//         $newcat = this.$categories.eq( catidx ),
//         $newcatchild = $newcat.children(),
//         lastEnter = dir === 'right' ? $newcatchild.length - 1 : 0,
//         self = this;
//
//       if( this.support ) {
//
//         $currcat.removeClass().addClass( toClass );
//
//         setTimeout(function (){
//
//           $newcat.removeClass().addClass( fromClass );
//           $newcatchild.q( lastEnter ).on( self.animEndEventName, function() {
//
//             $( this ).off( self.animEndEventName );
//             $newcat.addClass( 'mi-current' );
//             self.current = catidx;
//             var $this = $( this );
//             // solve chrome bug
//             self.forceRedraw( $this.get(0) );
//             self.isAnimating = false;
//
//             } );
//
//           }, $newcatchild.length * 90 );
//
//         }
//       else {
//
//         $currcat.hide();
//         $newcat.show();
//         this.current = catidx;
//         this.isAnimating = false;
//
//         }
//
//       },
//     // based on http://stackoverflow.com/a/8840703/989439
//     forceRedraw : function(element) {
//       if (!element) { return; }
//       var n = document.createTextNode(' '),
//         position = element.style.position;
//       element.appendChild(n);
//       element.style.position = 'relative';
//       setTimeout(function(){
//         element.style.position = position;
//         n.parentNode.removeChild(n);
//         }, 25);
//       }
//
//     }
//
//     $.fn.catslider = function( options ) {
//       var instance = $.data( this, 'catslider' );
//       if ( typeof options === 'string' ) {
//         var args = Array.prototype.slice.call( arguments, 1 );
//         this.each(function() {
//           instance[ options ].apply( instance, args );
//           });
//         }
//       else {
//         this.each(function() {
//           instance ? instance._init() : instance = $.data( this, 'catslider', new $.CatSlider( options, this ) );
//           });
//         }
//       return instance;
//       };
//
// } )($, window );

export const ViewportSlider = () => {
  return (
    <div id="mi-slider" className="mi-slider">
      <ul>
        <li><a href="#"><img src="../assets/images/1.jpg" alt="img0" /><h4>Boots</h4></a></li>
        <li><a href="#"><img src="../assets/images/2.jpg" alt="img02" /><h4>Oxfords</h4></a></li>
        <li><a href="#"><img src="../assets/images/3.jpg" alt="img03"/><h4>Loafers</h4></a></li>
        <li><a href="#"><img src="../assets/images/4.jpg" alt="img04"/><h4>Sneakers</h4></a></li>
      </ul>
      <ul>
        <li><a href="#"><img src="../assets/images/5.jpg" alt="img05"/><h4>Belts</h4></a></li>
        <li><a href="#"><img src="../assets/images/6.jpg" alt="img06"/><h4>Hats &amp; Caps</h4></a></li>
        <li><a href="#"><img src="../assets/images/7.jpg" alt="img07"/><h4>Sunglasses</h4></a></li>
        <li><a href="#"><img src="../assets/images/8.jpg" alt="img08"/><h4>Scarves</h4></a></li>
      </ul>
      <ul>
        <li><a href="#"><img src="../assets/images/9.jpg" alt="img09"/><h4>Casual</h4></a></li>
        <li><a href="#"><img src="../assets/images/10.jpg" alt="img10"/><h4>Luxury</h4></a></li>
        <li><a href="#"><img src="../assets/images/11.jpg" alt="img11"/><h4>Sport</h4></a></li>
      </ul>
      <ul>
        <li><a href="#"><img src="../assets/images/12.jpg" alt="img12"/><h4>Carry-Ons</h4></a></li>
        <li><a href="#"><img src="../assets/images/13.jpg" alt="img13"/><h4>Duffel Bags</h4></a></li>
        <li><a href="#"><img src="../assets/images/14.jpg" alt="img14"/><h4>Laptop Bags</h4></a></li>
        <li><a href="#"><img src="../assets/images/15.jpg" alt="img15"/><h4>Briefcases</h4></a></li>
      </ul>
      <nav>
        <a href="#">Shoes</a>
        <a href="#">Accessories</a>
        <a href="#">Watches</a>
        <a href="#">Bags</a>
      </nav>
    </div>
  )
};

