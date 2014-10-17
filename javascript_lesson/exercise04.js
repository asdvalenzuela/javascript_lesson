var cat = {
    tiredness: 50,
    hunger: 75,
    lonliness: 20,
    happiness: 0,
    feed: function ()
    {
        console.log("Thanks!");
        this.hunger = this.hunger - 10;
        this.happiness = this.happiness + 10;
        this.tiredness = this.tiredness + 50;
    },
    play: function(play_type)
    {
        if (this.tiredness > 75)
        {
            console.log("hissssssssss");
            this.tiredness += 10;
        }
        else if (play_type === 'laser')
        {
            console.log("ooooo");
            this.happiness = this.happiness + 50;
            this.tiredness = this.tiredness + 20;
        }
        else
        {
            console.log("purrrrrrrrr");
            this.happiness = this.happiness + 20;
            this.lonliness = this.lonliness -10;
        }
    },
    sleep: function(time)
    {
        console.log("zzzz");
        this.hunger = this.hunger + (10 * time);
        this.lonliness = this.lonliness + 30;
    },
    mystatus: function()
    {
        console.log("My tiredness:" + this.tiredness);
        console.log("My hunger:" + this.hunger);
        console.log("My lonliness:" + this.lonliness);
        console.log("My happiness:" + this.happiness);
    }

};

cat.mystatus();
cat.feed();
cat.play("laser");
cat.play("pet");
cat.feed();
cat.sleep();
cat.mystatus();