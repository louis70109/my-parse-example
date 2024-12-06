Parse.Cloud.define("createRelations", async (request) => {
  const { qweName, asdName, zxcName, rtyName } = request.params;

  try {
    const qwe = new Parse.Object("Qwe");
    qwe.set("name", qweName);
    const savedQwe = await qwe.save(null, { useMasterKey: true });

    const asd = new Parse.Object("Asd");
    asd.set("name", asdName);
    asd.set("qwe_id", savedQwe);
    const savedAsd = await asd.save(null, { useMasterKey: true });

    const zxc = new Parse.Object("Zxc");
    zxc.set("name", zxcName);
    zxc.set("asd_id", savedAsd);
    const savedZxc = await zxc.save(null, { useMasterKey: true });

    const rty = new Parse.Object("Rty");
    rty.set("name", rtyName);
    rty.set("zxc_id", savedZxc);
    const savedRty = await rty.save(null, { useMasterKey: true });

    return {
      qwe: savedQwe.toJSON(),
      asd: savedAsd.toJSON(),
      zxc: savedZxc.toJSON(),
      rty: savedRty.toJSON(),
    };
  } catch (error) {
    throw new Error("Error creating relations: " + error.message);
  }
});