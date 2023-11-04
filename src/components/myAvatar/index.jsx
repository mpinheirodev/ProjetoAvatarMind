import { Avatar } from "avataaars2";
import { useState } from "react";


export default function MyAvatar() {
  const [attributes, setAttribute] = useState({
    avatarStyle: "Circle",
    topType: "Hat",
    accessoriesType: "Sunglasses",
    hairColor: "BrownDark",
    facialHairType: "BeardLight",
    facialHairColor: "BrownDark",
    clotheType: "Hoodie",
    clotheColor: "Gray01",
    eyeType: "Default",
    eyebrowType: "Default",
    mouthType: "Default",
    skinColor: "Brown",
  });

  return (
    <>
      <Avatar {...attributes}/>
    </>
  );
}
