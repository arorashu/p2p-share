# IPFS WIKI

## How does IPFS work?

1. Your file, and all of the blocks within it, is given a unique fingerprint called a cryptographic hash. 
2. IPFS removes duplications across the network. 
3. Each network node stores only content it is interested in, plus some indexing information that helps figure out which node is storing what. 
4. When you look up a file to view or download, you're asking the network to find the nodes that are storing the content behind that file's hash. 
5. You don't need to remember the hash, though — every file can be found by human-readable names using a decentralized naming system called IPNS.


## What it does for me? That couldn't be done before?

### 1. Content addressing

Content-addressed storage

I can host files, and they are made available to anyone, by addressing it through the public gateways. Previously, if I wanted to host files, I would have to create a server with a static IP. Probably then link that with a DNS. With a server came the responsibility of managing that server, in terms of security, etc. Now, IPFS provides me with an abstraction that does all that.

Essentially, IPFS gives an abstraction that anybody can act as a server. As a consequence, the network is now optimised to deliver content directly from peer to peer. 

You do not need a static IP address anymore, you just need to be connected to the internet and using public key cryptography, you are potentially addressable anywhere on the internet.



## What other benifits does it offer?

1) 


## What does it not do?

1. It is not a backup of your data, essentially. You contribute some storage and bandwidth to the network, in exchange for the same.


## How does it compare to the Client Server model?

### 1. Client Server model is efficient...

I think the client server model is very efficient in terms of CPU, memory utilization. Datacenters host massive amount of computers, and with the economies of scale, they can be operated very cheaply. Virtualization technology has enabled this. Electricity, maintainence and administration costs are amotized over time on large data centers.

This model though, probably does not make the network use efficient. Networks make platforms. Network and data affinity are the problems todays internet faces. THen again, what is the problem you are trying to solve?

2. Decouples contents (data) you want, from the way to get it. 

## Summary

Essentially, IPFS is no silver bullet. It is a tool to enable people to distribute applications. Developers own the network.
Using the IPFS network, I can choose to share my data with anyone, peer to peer, without relying on a central 3rd party or service.

## Open Questions (to which I don't know the answer to?)

1) What about compute? How do you think about compute heavy applications with p2p? Like machine learning.

## To look into more

1) Filecoin

Essentially, how I can share part of my storage (or pay money), to get a backup of my data, for redundancy, and maybe availability. Storj does that too.




## Refrences
1. https://ipfs.io/#how
2. Edgar Lee of Netflix - https://www.youtube.com/watch?v=wNfk05D887M&list=PLuhRWgmPaHtTwwGv30nKdhr3GiIAnhbyE&index=2
