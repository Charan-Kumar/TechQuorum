import { signText,
    getAddress,
    signTypedData,
    splitSignatures,
    getLensHub, 
    // getFollowNftContract
} from "./ethersUtils";

import {
  createUnfollowTypedData,
    createFollowTypedData,
    getFollowerRequest,
    authencticate,
    generateChallenge,
    getProfilesRequest,
} from "./ApolloRequest"; 


export const login = async () => {
    const address = await getAddress();
    const challenge =  await generateChallenge(address);
    const signature = await signText(challenge.data.challenge.text);

    const accessToken = await authencticate(address,signature);
    console.log(accessToken);
    localStorage.setItem('access_token',accessToken.data.authencticate.accessToken);
    localStorage.setItem('refresh_token',accessToken.data.authencticate.refreshToken);
}


  
// @dev This is the Function to be called when the follow data has been finalized 
// the followRequestInfo here will be an array of [{}] according to https://docs.lens.dev/docs/create-follow-typed-data
export const follow = async (followRequestInfo) => {

    const result = await createFollowTypedData(followRequestInfo);
    console.log(result.data.createFollowTypedData.typedData);
    const typedData = result.data.createFollowTypedData.typedData;
    
    const signature = await signTypedData (typedData.domain , typedData.types, typedData.value);
    const {v,r,s} = splitSignatures(signature);
    const lensHub =await getLensHub()
    const tx = await lensHub.followWithSig({
      follower : getAddress(),
      profileIds : typedData.value.profileIds,
      datas : typedData.value.datas,
      sig : {
        v,
        r,
        s,
        deadline : typedData.value.deadline,
      },
    });
    console.log(tx.hash);
  }



// export const unfollow = async(profileId) => {
  
//     const result = await createUnfollowTypedData(profileId);
     
//     const typedData = result.data.createUnfollowTypedData.typedData;
    
//     const signature = await signTypedData(typedData.domain, typedData.types, typedData.value);
//     const { v, r, s } = splitSignatures(signature);
    
//     // load up the follower nft contract
//     const followNftContract = await getFollowNftContract();
    
//     const sig = {
//         v,
//         r,
//         s,
//         deadline: typedData.value.deadline,
//      }
    
//     const tx = await followNftContract.burnWithSig(typedData.value.tokenId, sig);
//     console.log(tx.hash);
//   }
  
  

