/*

    DocumentJS for Documentation Generation
    javascriptmvc.com/docs.html#!DocumentJS

*/

/*Keeps the Global Paper*/
var paper;

var org = Joint.dia.org; //inti JointJS for Tree Diagrams

/*Global Variables*/
var canvasWidth;
var canvasHeight;

/*ChartAPI Namespace*/
var ChartLibrary =
{

    /*
    * inti the SVG Drawing Canvas.
    * @param {string} id <div> tag which canvas is draw.
    * @param {float} id Order identification number.
    * @param {float} id Order identification number.
    * @return {Boolean} Returns true if canvas init successfully.
    */
    init: function (id, w, h) {
        this.canvasWidth = w;
        this.canvasHeight = h;
        Joint.paper(id, this.canvasWidth, this.canvasHeight);
        //(null != id || "undefined" != id) && );

        //gets the paper from JointJS lib.
        this.paper = Joint.getPaper();

        this.paper.text(50, 10, "Testing");

        //        var circle = this.paper.rect(100, 100, 550, 800);
        //        circle.attr("fill", "#f00");
        //        circle.toBack();



    },


    /*
    * inti the SVG Drawing Canvas.
    * @param {Node} Node Object which will be created on canvas
    */
    CreateNode: function (nodeItem) {

        var node = org.Member.create({
            rect: nodeItem.positionInfo,
            name: nodeItem.name,
            position: nodeItem.description,
            avatar: nodeItem.avatar,
            attrs: nodeItem.style
        });

        return node;
    },

    /*
    * Create Relationships :   Ancestors of node n are all the nodes that are on some path  to n from root
    * @param {Node} Parent Parent Node Object
    * @param {Node} Child  Child Node Object
    */
    MakeAncestorsOf: function (Parent, Child, Label, IsHighlight) {
        !0 == IsHighlight ? Child.joint(Parent, org.flower).label(Label).straighten().highlight() : Child.joint(Parent, org.flower).label(Label).straighten();
    },

    CreateRootNode: function (nodeItem) {

        var rootX=this.canvasWidth /2;
        var rootY=0;

        var rootPosition = { x: rootX, y: rootY, width: 140, height: 60 };

        var node = org.Member.create({
            rect: rootPosition,
            name: nodeItem.name,
            position: nodeItem.description,
            avatar: nodeItem.avatar,
            attrs: nodeItem.style
        });

        return node;
    },


    /* Draw Background Positions */
    DrawBackground: function (numberofLevels) {

        var levelHeight = this.canvasHeight / numberofLevels;
        console.log("LevelHeight" + levelHeight);

    }

};

 




/*
      -- ClassDefinitions
*/


/*
* @class Node
* @parent ChartLibrary 
* @constructor
* Creates a new Node Object.
* @param {Rectangle} positionInfo
* @param {String} name
* @param {String} description
* @param {Blob} avatar
*/
function Node(positionInfo, name, description,style ,avatar) {
    this.name = name,
    this.description=description,
    this.avatar = avatar,
    this.positionInfo = positionInfo,
    this.style=style
 };


 /*
 * @class Rectangle
 * @parent ChartLibrary 
 * @constructor
 * Creates a new Rectangle.
 * @param {float} x
 * @param {float} y
 * @param {float} w
 * @param {float} h
 */
function Rectangle(x, y, w, h){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
};



/* Support Objects */
var STYLE = {
    PARENTSTYLE: {
        fill: '#4192d3',
        stroke: 'gray'
    },
    CHILDSTYLE: {
        fill: '#AEA5CF',
        stroke:'#554C75'
    }
}