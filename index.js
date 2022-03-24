const photoSlideShow =
{
    photoList:[
        "all work and no play makes jack a dull boy", "all work and no play makes jack a dull boy2", "all work and no play makes jack a dull boy3"
    ],
    currentPhotoIndex: 2,
    nextPhoto: function()
    {
        if (this.currentPhotoIndex < 3) 
        {
            console.log(this.photoList[this.currentPhotoIndex])
            this.currentPhotoIndex++;
        }
        else
        console.log("cheese it!");
    },
    previousPhoto: function()
    {
        if (this.currentPhotoIndex > 1)
        {
            console.log(this.photoList[this.currentPhotoIndex])
            this.currentPhotoIndex--;
        }
        else
        console.log("cheese it!");
    },
    getCurrentPhoto: function()
    {
        console.log(this.photoList[this.currentPhotoIndex]);
    }
}

photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();