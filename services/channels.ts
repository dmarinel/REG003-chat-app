const url = "http://localhost:3000";
// const secretKey = process.env.SECRET_KEY_DEV || 'holaMundo';
const tokens = localStorage.getItem("token");
console.log(tokens);

interface PostChannelProps {
  nameChannel: string;
  description: string;
}

export const getUserChannels = async (token: string, uid: number) => {
  const userChannelsService = await fetch(`${url}/api/user/${uid}/channels`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authentication: "Bearer " + `${token}`,
    },
  });
  const data = await userChannelsService.json();
  return data;
};

export const getChannelsToDiscover = async (token: string, uid: number) => {
  const userChannelsService = await fetch(
    `${url}/api/user/${uid}/discover-channel`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authentication: "Bearer " + `${token}`,
      },
    }
  );
  const data = await userChannelsService.json();
  return await data;
};

export const postChannel = async (obj: PostChannelProps) => {
  const req = await fetch(`${url}/api/channel`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "authorization": `Bearer ${tokens}`,
    },
    body: JSON.stringify(obj),
  });
  const data = await req.json();
  console.log(data);
  
  return data;
};
