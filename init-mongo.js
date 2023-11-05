db.getSiblingDB("unifi").createUser({user: "unifi", pwd: "PASSWORD", roles: [{role: "dbOwner", db: "unifi"}, {role: "dbOwner", db:"unifi_stat"}]});
