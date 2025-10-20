function changeDressMiranda() {
    document.getElementById("garmentImg").src = "wardrobe/mirandafit.png";
    document.getElementById("garmentImg").alt = "a pixel drawing of a lolita dress on a mannequin."
    document.getElementById("garmentInfo").innerHTML = "<h2>Miranda</h2><p><strong>brand:</strong> Alice and the Pirates</p><p><strong>type:</strong> JSK</p><p><strong>note:</strong> I was considering selling this for a long while because it didn't look nice on me, but turns out all it needed was a VERY strong petticoat and a collar that covered those spaghetti straps. I'm happy I've learnt how I like to wear it!</p>";
}

function changeDressMillefeuille() {
    document.getElementById("garmentImg").src = "wardrobe/millefeuillefit.png"
    document.getElementById("garmentImg").alt = "a pixel drawing of a lolita dress on a mannequin."
    document.getElementById("garmentInfo").innerHTML = "<h2>Millefeuille</h2><p><strong>brand:</strong> Baby, the Stars Shine Bright</p><p><strong>type:</strong> JSK</p><p><strong>note:</strong> My favourite! It's gorgeous and versatile. A perfect staple for a kuro lolita!</p>"
}

function changeDressTimeWitch() {
    document.getElementById("garmentImg").src = "wardrobe/timewitchfit.png"
    document.getElementById("garmentImg").alt = "a pixel drawing of a lolita dress on a mannequin."
    document.getElementById("garmentInfo").innerHTML = "<h2>Time Witch</h2><p><strong>brand:</strong> lost tree</p><p><strong>type:</strong> JSK</p><p><strong>note:</strong> I love this piece so much! It's my designated convention dress because the moon phases and colour scheme coordinates well with my Jyushi itabag LOL.</p>"
}

function changeDressOverture() {
    document.getElementById("garmentImg").src = "wardrobe/overturefit.png"
    document.getElementById("garmentImg").alt = "a pixel drawing of a lolita vest on a mannequin."
    document.getElementById("garmentInfo").innerHTML = "<h2>Overture of the Night</h2><p><strong>brand:</strong> Princess Chronicles</p><p><strong>type:</strong> Vest</p><p><strong>note:</strong> I really love how this vest moves when wearing it... It's like the weight makes it perfectly flowy.</p>"
}

function changeDressTenor() {
    document.getElementById("garmentImg").src = "wardrobe/tenorfit.png"
    document.getElementById("garmentImg").alt = "a pixel drawing of a lolita vest on a mannequin."
    document.getElementById("garmentInfo").innerHTML = "<h2>Tenor</h2><p><strong>brand:</strong> Innocent World</p><p><strong>type:</strong> Bustier</p><p><strong>note:</strong> This is technically a bustier but I wear it as a vest...</p>"
}

function changeDressConrad() {
    document.getElementById("garmentImg").src = "wardrobe/conradfit.png"
    document.getElementById("garmentImg").alt = "a pixel drawing of a lolita blouse on a mannequin."
    document.getElementById("garmentInfo").innerHTML = "<h2>Prince Conrad</h2><p><strong>brand:</strong> Alice and the Pirates</p><p><strong>type:</strong> Blouse</p><p><strong>note:</strong> I've seen this pop up a million times secondhand and not once has the bow it's meant to come with been included. This blouse is cursed... and been through a lot! I wear it with everything!</p>"
}

function clearGarment() {
    document.getElementById("garmentImg").src = ""
    document.getElementById("garmentImg").alt = ""
    document.getElementById("garmentInfo").innerHTML = "<p>click a button!</p>"
}