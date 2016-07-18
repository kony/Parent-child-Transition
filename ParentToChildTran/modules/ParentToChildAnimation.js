var srcWidth,srcHeight;
var widgetCenterX,widgetCenterY;
var orgiX,orgiY,orgiWidth,orgiHeight,curWidget;
var imageCenterX,imageCenterY,imageWidth,imageHeight;
var X,Y;

/*****************************

Function: on_click_animation

Description: This function gets invoked when an image is clicked on the screen it animates the popupcont and the image clicked

******************************/


function on_click_animation(currentWidget)
{
  kony.print("\n$$$$$$$      in on_click_animation function   $$$$$$$$$$\n");
  getCurrentWidgetInfo(currentWidget);
  X=(srcWidth/2).toFixed(2);
  Y=(srcHeight/2).toFixed(2);
 
  kony.print("\n\n X : "+X+"\n\n Y : "+Y+"\n\n");
  if((currentWidget!="popupCont"||currentWidget!="touchCont")&&X!=widgetCenterX&&Y!=widgetCenterY)
  {
     if(curWidget!=null && curWidget!="")
     {
       if(frm1[curWidget].isVisible!=true)
         {
           
           frm1.popupCont.animate(child_to_parent_animation(),Config(),{animationStart: anistart } );
  
           frm1[currentWidget].animate(child_to_parent_image_animation(),Config(),{animationEnd:aniend1} );
         }
       frm1[curWidget].isVisible=true;
     }
     curWidget=currentWidget;
    
     frm1.popupCont.animate(child_to_parent_animation(),Config(),{animationStart: anistart } );
     frm1[currentWidget].animate(child_to_parent_image_animation(),Config(),{animationEnd:aniend1} );
   }
  
  
   if((currentWidget=="popupCont"||currentWidget=="touchCont")&&X==widgetCenterX&&Y==widgetCenterY)
   {
       frm1.popupCont.animate(child_to_parent_animation_reverse(),Config(),{animationStart: anistart1 } );
       frm1[currentWidget].animate(child_to_parent_image_animation_reverse(),Config(),{animationStart: anistart1,animationEnd:aniend} );
   }
    
  
  
  
}


/*****************************

Function: on_click_PopupCont

Description:This function gets invoked when the popupcont and touchCont is visible

******************************/


function on_click_PopupCont(currentWidget)
{
  frm1.popupCont.animate(child_to_parent_animation_reverse(),Config(),{animationStart: anistart1 } );
  frm1[curWidget].animate(child_to_parent_image_animation_reverse(),Config(),{animationStart: anistart1,animationEnd:aniend} );
       
}


/*****************************

Function: image_Properties

Description:This function gets the centerx, centery, width and height of the Image in the popupCont

******************************/

function image_Properties()
{
    imageWidth=(parseInt(frm1.popupImg.width)*parseInt(frm1.popupCont.width))/100;
    imageHeight=(parseInt(frm1.popupCont.height)*parseInt(frm1.FlexContainer0e65237c8eaa141.height))/100;
           
          
    imageCenterX=10+(imageWidth/2);imageCenterX=imageCenterX+"%";
    imageCenterY=20+(imageHeight/2);imageCenterY=imageCenterY+"%";
  
    imageWidth=imageWidth+"%";
    imageHeight=imageHeight+"%";
  
    kony.print("\n\n imageWidth : "+imageWidth+"\n\n imageHeight : "+imageHeight+"\n\n");
  
    kony.print("\n\n imageCenterX : "+imageCenterX+"\n\n imageCenterY : "+imageCenterY+"\n\n");
  
    getScreenInfo();
}



/*****************************

Function: getScreenInfo

Description:This function gets the width and height of the current device Screen

******************************/

function getScreenInfo()
{
  kony.print("\n$$$$$$$      in getScreenInfo function   $$$$$$$$$$\n");
  srcWidth=kony.os.deviceInfo().screenWidth;
  srcHeight=kony.os.deviceInfo().screenHeight;
  kony.print("\n srcWidth : "+srcWidth+"\t\t srcHeight : "+srcHeight+"\n");
}





/*****************************

Function: getCurrentWidgetInfo

Description:This function gets the centerx and centery of the current widget and updates the orgiX orgiY orgiWidht and orgiHeight

******************************/

function getCurrentWidgetInfo(currentWidget)
{
  widgetCenterX=frm1[currentWidget].centerX;
  widgetCenterY=frm1[currentWidget].centerY;
  
  kony.print("\n\n widgetCenterX : "+widgetCenterX+"\n\n widgetCenterY : "+widgetCenterY+"\n\n");
  
  
  if(X!=widgetCenterX)
  {
    orgiX=widgetCenterX;
    orgiWidth=frm1[currentWidget].width;
  }
  if(Y!=widgetCenterY)
  {
    orgiY=widgetCenterY;
    orgiHeight=frm1[currentWidget].height;
  }
  kony.print("\n\n orgiWidth : "+orgiWidth+"\n\n orgiHeight : "+orgiHeight+"\n\n");
}


/*****************************

Function: anistart

Description:This function is invoked before the animation of the popupcont starts

******************************/

function anistart()
{
  
  frm1.touchCont.isVisible=true;
  frm1.popupImg.src=frm1[curWidget].src;
  frm1.popupCont.isVisible=true;
  
  kony.print("\n\n$$$$$$$$$$$$ in anistart  $$$$$$$$$$\n\n");
}


/*****************************

Function: anistart1

Description:This function is invoked before the animation of the popupcont starts while going backwards

******************************/

function anistart1()
{
                                  
   frm1[curWidget].zIndex=frm1.popupCont.zIndex+1;
   frm1[curWidget].isVisible=true;
   frm1.touchCont.isVisible=true;
   frm1.popupImg.src=frm1[curWidget].src;
   frm1.popupCont.isVisible=true;
  
   kony.print("\n\n$$$$$$$$$$$$ in anistart  $$$$$$$$$$\n\n");
}




/*****************************

Function: aniend

Description:This function is invoked after the animation of the current widget starts

******************************/

function aniend()
{
                                     
   frm1.touchCont.isVisible=false;
   frm1[curWidget].isVisible=true;
   frm1.popupCont.isVisible=false;
   frm1[curWidget].zIndex=5;
  
  kony.print("\n\n$$$$$$$$$$$$ in aniend  $$$$$$$$$$\n\n");
}




/*****************************

Function: aniend1

Description:This function is invoked after the animation of the current widget starts while going back

******************************/


function aniend1()
{
                                    
    frm1.popupImg.isVisible=true;
    frm1[curWidget].isVisible=false;
    frm1[curWidget].zIndex=5;
                                     
    kony.print("\n\n$$$$$$$$$$$$ in aniend1  $$$$$$$$$$\n\n");
}





/*****************************

Function: Config

Description:This function is having the configuration details of the animation

******************************/


function Config()
{
  kony.print("\n$$$$$$$      in animConfig function   $$$$$$$$$$\n");
 
  var config = {
                  "duration":0.5,
                  "direction":kony.anim.DIRECTION_NONE,
                  "iterationCount":1,
                  "delay":0,
                  "fillMode":kony.anim.FILL_MODE_FORWARDS
               };
   return config;

}


/*****************************

Function: child_to_parent_animation

Description:This function is having the steps of the animation of the popupCont forward

******************************/

function child_to_parent_animation()
{
  kony.print("\n$$$$$$$      in child_to_parent_animation function   $$$$$$$$$$\n");

  var anchor_X=parseInt(frm1.popupImg.width)/10;
  var anchor_Y=parseInt(frm1.FlexContainer0e65237c8eaa141.height)/10;

  var animDefinitionOne = {
        0: {
          
          "width":orgiWidth,
          "height":orgiHeight,
          "centerX":widgetCenterX,
          "centerY":widgetCenterY,
          "zIndex":1,
            "anchorPoint": {
                "x": anchor_X,
                "y": anchor_Y
            },
          "stepConfig":{"timingFunction":kony.anim.LINEAR}
            
        },
    
        100: {
          "width":(srcWidth*80)/100,
          "height":(srcHeight*60)/100,
          "centerX":X,
          "centerY":Y,
          "zIndex":20,
          "anchorPoint": {
                "x": anchor_X,
                "y": anchor_Y
            },
          "stepConfig":{"timingFunction":kony.anim.LINEAR}
           
        }
       
     }
    animDef = kony.ui.createAnimation(animDefinitionOne);
    return animDef;

}


/*****************************

Function: child_to_parent_animation

Description:This function is having the steps of the animation of the Image forward

******************************/


function child_to_parent_image_animation()
{
  kony.print("\n$$$$$$$      in child_to_parent_image_animation function   $$$$$$$$$$\n");
  
  var anchor_X=parseInt(frm1.popupImg.width)/10;
  var anchor_Y=parseInt(frm1.FlexContainer0e65237c8eaa141.height)/10;
  
  var animDefinitionOne = {
        0: {
          
          "width":orgiWidth,
          "height":orgiHeight,
          "centerX":widgetCenterX,
          "centerY":widgetCenterY,
          "zIndex":20,
            "anchorPoint": {
                "x": anchor_X,
                "y": anchor_Y
            },
            "stepConfig":{"timingFunction":kony.anim.LINEAR}
        },
    
        100: {
          "width":imageWidth,
          "height":imageHeight,
          "centerX":imageCenterX,
          "centerY":imageCenterY,
         // "zIndex":4,
          "anchorPoint": {
                "x": anchor_X,
                "y": anchor_Y
            },
           "stepConfig":{"timingFunction":kony.anim.LINEAR}
        }
       
     }
    animDef = kony.ui.createAnimation(animDefinitionOne);
    return animDef;

}



/*****************************

Function: child_to_parent_animation

Description:This function is having the steps of the animation of the popupCont backward

******************************/

function child_to_parent_animation_reverse()
{
  kony.print("\n$$$$$$$      in child_to_parent_animation function   $$$$$$$$$$\n");

  var anchor_X=parseInt(frm1.popupImg.width)/10;
  var anchor_Y=parseInt(frm1.FlexContainer0e65237c8eaa141.height)/10;
  
  var animDefinitionOne = {
        0: {
          "width":(srcWidth*80)/100,
          "height":(srcHeight*60)/100,
          "centerX":X,
          "centerY":Y,
         // "zIndex":20,
          "anchorPoint": {
                "x": anchor_X,
                "y": anchor_Y
            },
          "stepConfig":{"timingFunction":kony.anim.LINEAR}
         
            
        },
    
        100: {
          "width":orgiWidth,
          "height":orgiHeight,
          "centerX":widgetCenterX,
          "centerY":widgetCenterY,
         // "zIndex":1,
            "anchorPoint": {
                "x": anchor_X,
                "y": anchor_Y
            },
          "stepConfig":{"timingFunction":kony.anim.LINEAR}
           
        }
       
     }
    animDef = kony.ui.createAnimation(animDefinitionOne);
    return animDef;

}


/*****************************

Function: child_to_parent_animation

Description:This function is having the steps of the animation of the Image backward

******************************/


function child_to_parent_image_animation_reverse()
{
  kony.print("\n$$$$$$$      in child_to_parent_image_animation function   $$$$$$$$$$\n");

  var anchor_X=parseInt(frm1.popupImg.width)/10;
  var anchor_Y=parseInt(frm1.FlexContainer0e65237c8eaa141.height)/10;
  
  var animDefinitionOne = {
        0: {
          "width":imageWidth,
          "height":imageHeight,
          "centerX":imageCenterX,
          "centerY":imageCenterY,
          "zIndex":20,
          "anchorPoint": {
                "x": anchor_X,
                "y": anchor_Y
            },
           "stepConfig":{"timingFunction":kony.anim.LINEAR}
          
        },
    
        100: {
          "width":orgiWidth,
          "height":orgiHeight,
          "centerX":widgetCenterX,
          "centerY":widgetCenterY,
          //"zIndex":5,
            "anchorPoint": {
                "x": anchor_X,
                "y": anchor_Y
            },
            "stepConfig":{"timingFunction":kony.anim.LINEAR}
        }
       
     }
    animDef = kony.ui.createAnimation(animDefinitionOne);
    return animDef;

}




