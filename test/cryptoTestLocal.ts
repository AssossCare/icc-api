import { expect } from "chai"
import "mocha"

import fetch from "node-fetch"
import { Api } from "./api"
import { UserDto } from "../icc-api/model/UserDto"
const tmp = require("os").tmpdir()
console.log("Tmp dir: " + tmp)
;(global as any).localStorage = new (require("node-localstorage")).LocalStorage(
  tmp,
  5 * 1024 * 1024 * 1024
)
;(global as any).Storage = ""

const privateKeys: { [key: string]: string } = {
  "90f5e9e6-fa6e-43a3-b5e9-e6fa6e13a315":
    "308204bc020100300d06092a864886f70d0101010500048204a6308204a202010002820101008c08598a2387ebef4a7635803e6b7a659b08a763794968a68469a1ae58beaa16b258f740a8cccd8e6dbb216d4cabfaa7b83809617a83607d89b9c8d78b7cfde4ff2fb863a8f6caf1639940d0a76d7574f8129d41d81704c67dd970d20f759947acd0ec40c919639c40fbded1268dc3b53318e1aaac04bf61512c37afe8ea18bc0961d61dd94fbe4bc59e4f0eabbc3837e3a64b411ee5d34412b9f052c5e7e7a776ee13dfeb3d85c204021e3f68be25f5f0ee7c1b50048ede36fcbd7c62b47e138d7b54eaf74e689d1c331f7e3007285fdd6fa3c9986a4c2718d89b55f7f749c78ceb9a952cd418737f7f4457304581b1863297c6134b31610e3705cc595a830f02030100010282010031086b71f7670cb2497c82d759040163ba99992337c100a7ee0d9ed391b7918f48fbe5f7fa235c86d6dd83a2e60a0246e0369ef24717e19d93b03e275b6c74eace80432c8269883e6605afb0602fefc4f9686b30371e3849d89f5ee5ef0bda94426b158ec9dbde0944a7ed29873a74a0ea37782d6ef66a9d04f35abc79ee1ea294214e8e8bd6d23e8ab9799995faa7bfee7a3582c1662c2071e721474e5ce31c2548401cffd121f625b01f4cd5c69a3a7744ae8730d54808f5293c874de1b0cddb10f23cb687ac4395506e429249bc6536a7538553b95104ee68414f60e4a80d3cd3460d8f4414cc7866374ec570898ca4b74f1dc79ca7cce79b63fa71fa386102818100cbd9cbcf6d38cbac45d07d1dfc543c4ab7120da0453991df48d697539afb5d8ef26a737280bf0696b38d42ce7b2797e0e849f46e226c89104cc668ca9a98fd13bf8d8391d286bd858cafab941730516b68313834afc72318188a500aa4363cb0c78c41245eea3ab2d7dfa0cd76681ac08b52c25864c8b738beaeb852d95b9b5d02818100afdb18fd2340110a5c0fa2844d3068ddb5b9a276f638939aa0204443c1b3a1109d742bf2cb36527721ccee6522bd6bd83db56096a69ae9d87a23ed6e822c3519e8fbd092351b871701ecfd73d748ffc07048e1de748b5e44b048c399d6a1c297b878876ff11a3c865d40988cc0857652ada213eebe975dfbb1d53129d3a7dd5b028180285d53071ab88153f66b072b55d8942bb33e66e6526ec8dcaebe972e5de4e22cb901ad24822bd1312c128fa4f52becde030109de790086cf6c7469319d15281fadf166990c57d3d54afb49fd43ee3461113b95c690fbdc8e1be5df5d8c109549e7e974c8afe6af82d44e1ab83476febd1b9962944038a2572122d5aaca11629d02818070acba531f2de27d37c550c4e24c3d34a9463ae16c1b8dff89cf82cdc3239bf4705e49f673dbe774ab7489dec526871df353ee82385793b37f76db9f6dca736f998716f9470bcf3f9f9d403be3d9c2fc83353f7b704307f08cdee26d04477ace0985388a31fa348386e66797ef96d3dc5fa23491490ee549ea8485ce9dedb5770281807f7ada312aafc2a4f568f533d7b8bb96468a17eb8bd5e7c79379d57b95b11bccbfdc19d3f49a13d330d5730d89ab77e82919b6a8cfe933d1deb78eded19ed98ff42162c1c7451e89194ed51e678c188b9dc97acde79e8366386d4a7239391143dd04049ef1923917ace4b5c0c48955c0a6bb262fda46115b8d51efbb5bf27353",
  "6ad06a66-b3d5-4c87-906a-66b3d56c8745":
    "308204be020100300d06092a864886f70d0101010500048204a8308204a40201000282010100a37bd7906b13bb1f05cc64b09e915abcdd48134ec914818735a4a9a26fa37de070dccd7b581014994514b62526bd520d8c24bd9d161256747ef8865b050d9395e91699ac75322d4e21edf9af7633ce508dbc2e57e48b66342f5599487dac8df116accc1b9c16a14de1325a99cd008b1ae6ecfbe5e5c42094318ce250d26e253d57d154f08322916ff4735fa935a97e7be49c446861d17f5eebff42cc6e037931b76760e03012cabc4bebaebceb7b0596dfcf7c2b2da8d7f6ebbf276abc4fd86fd2066ed018a0291f2e138ebcfa03eab9690612fec3610758a3b32c9754dd1885547d6e9189ae7ca37b6ae565834cb2f71e606cc171046c967907b6a23a5683e10203010001028201001251de662099a56e6487f30097c45216b7f54bb49873e3cff302f0bf73232f07e79dd6a8ebc561898b6436c51302441fa084bd7accee6121ccd8acb5a66b4f0e8d802ad85889b6e9fa8360677927750731dad496a4d5ba2e3edfa8bda6d79f5054ea28352fd8995ad0d183b5987367232c9d81dcd152991402397762f731c09a60fcc924c4ec0075142f177f7825ce5bf0ac8f93135e10fcce514d4351c781f469a11a48d4fd93238c5336fe3e3901cd1bd3ef5aed3733e2c079c072b80fc14b76608267ac51230c487bea97d4e3419e6beb11e63b33fead78a2eb5d0aa9735993e5389c2ba346286ed2570e4e28df5c19a7a00af36f1ac687dfd141a2ae2dc102818100e6f70b46a91728528fc7681c8c4916a16a9e27091f55cd4a471cf1d136831d27afb79571bc860c4df8e7f1adbdf3d3479e5dc96391e3300b876b99de2eda63d302b001021f5b4a12e261803771cd3577e7276f661afa40020a7cc38f8804b79aadf463121e1718714730f45b27c18072ac109b60ef83b82e369619afa56cf49302818100b534499bf9cefce0703d20df37f8ff7f0ab50afac3d67459d3ccb80045113d818a011661174ce0f8a93a47e260964127bd3988fd453fc2e6c72ace5e85907556449a2a975c3d15cbc1177503991df0dffd5b17007f549634e12589f02a5179e8b98a483e046e0e74669ac84da9605698c4ba01cf5fb02cae71127ae00a0b023b02818100e3c03e654a3e24abed4dd4333a7ea40b3e288013b5cb952926a0bb2ff3d22cc0c2bc8468685fc2e86c86c3c1f0eaebafd6d162d285bc82d70b8da667fac9ade018e957c53108832dc60021400b3f30f770806990450ffa6848d128c2737d3b54132f47364967bad9913b0bea8b747b66189833afcddf9492358fa3fa9964ac730281801ca22a8f8f25fa27ad14bbc10a233a9c64a0bf1f691ad63feb8c09f760f29c797fc934341b6e768e548f75147c96c1acf9e5c193e4017356ec5a034a4468d361d26d5a1598e9be2bf853309664f7aa3c7ad88e05f218f7b35b70871f805067a732ca7b27f1a3427d7a493325b2821aad0149334805a2dd2ca3897c09330d124902818100c7b61e7d568853f0746f56d1da6ce1c86a1ec78030dfb4b37272000a40f836b4eea4f2641b21d7cad489dd862cd1e9ef761114a5cbe0ae124e0608f67bcd323b9dfa9fb025d241785cfa66dd3d55d8129c8881cb43c237bb7265b2a284b64bc97d6366e0cc7dca0453249fe86d0fa91556fd104847f351ac92f3d57192c4ddcc"
}

let api = new Api(
  "http://localhost:16043/rest/v1",
  {
    Authorization: `Basic ${Buffer.from(
      `${"8bf90a36-e72d-4313-b90a-36e72dc31393"}:${"2e539754ad2d09ee437589cb1db2d46f73941747"}`
    ).toString("base64")}`
  },
  fetch as any
)

let mhapi = new Api(
  "http://localhost:16043/rest/v1",
  {
    Authorization: `Basic ${Buffer.from(
      `${"fbed10f4-d423-48c6-ad10-f4d423c8c637"}:${"b230e9efed09705a74131ae706cafa4a51fdf013"}`
    ).toString("base64")}`
  },
  fetch as any
)

async function initKeys(api: Api, user: UserDto) {
  let id = user.healthcarePartyId
  while (id) {
    await api.cryptoicc
      .loadKeyPairsAsTextInBrowserLocalStorage(id, api.cryptoicc.utils.hex2ua(privateKeys[id]))
      .catch(error => {
        console.error("Error: in loadKeyPairsAsTextInBrowserLocalStorage")
        console.error(error)
      })

    id = (await api.hcpartyicc.getHealthcareParty(id)).parentId
  }
}

describe("Init confidential delegation in patient local", () => {
  it("should return a patient with a confidential delegation", async () => {
    try {
      const user = await api.usericc.getCurrentUser()
      await initKeys(api, user)

      const pat = await api.patienticc.newInstance(user, { firstName: "Daf", lastName: "Marathon" })
      const modifiedPatient = await api.patienticc.initConfidentialDelegation(pat, user)

      const confidentialDelegationKey = await api.cryptoicc.extractPreferredSfk(
        pat,
        user.healthcarePartyId,
        true
      )
      const nonConfidentialDelegationKey = await api.cryptoicc.extractPreferredSfk(
        pat,
        user.healthcarePartyId,
        false
      )

      expect(confidentialDelegationKey === nonConfidentialDelegationKey).to.equal(false)
    } catch (e) {
      console.log(e)
    }
  })
})

describe("Init confidential delegation in patient from MH local", () => {
  it("should return a patient with a confidential delegation", async () => {
    try {
      const user = await api.usericc.getCurrentUser()
      await initKeys(api, user)

      const pat = await mhapi.patienticc.newInstance(user, {
        firstName: "Daf",
        lastName: "Marathon2"
      })
      const modifiedPatient = await api.patienticc.initConfidentialDelegation(pat, user)

      const confidentialDelegationKey = await api.cryptoicc.extractPreferredSfk(
        pat,
        user.healthcarePartyId,
        true
      )
      const nonConfidentialDelegationKey = await api.cryptoicc.extractPreferredSfk(
        pat,
        user.healthcarePartyId,
        false
      )

      expect(confidentialDelegationKey === nonConfidentialDelegationKey).to.equal(false)
    } catch (e) {
      console.log(e)
    }
  })
})

describe("test that confidential information cannot be retrieved at MH level", () => {
  it("should find the confidential data only when logged as the user", async () => {
    try {
      const user = await api.usericc.getCurrentUser()
      const mhUser = await mhapi.usericc.getCurrentUser()
      await initKeys(api, user)
      await initKeys(mhapi, mhUser)

      const pat = await api.patienticc.newInstance(user, { firstName: "John", lastName: "Doe" })
      const modifiedPatient = (await api.patienticc.initConfidentialDelegation(pat, user))!!

      await api.helementicc.createHealthElement(
        await api.helementicc.newInstance(
          user,
          modifiedPatient,
          { descr: "Confidential info" },
          true
        )
      )

      const retrievedHesAsUser = await api.helementicc.findBy(
        user.healthcarePartyId,
        modifiedPatient
      )
      const retrievedHesAsMh = await mhapi.helementicc.findBy(
        mhUser.healthcarePartyId,
        modifiedPatient
      )

      expect(retrievedHesAsUser.length).to.equal(1, "User should see its confidential data")
      expect(retrievedHesAsMh.length).to.equal(0, "MH should not see confidential data")
    } catch (e) {
      console.log(e)
    }
  })
})

describe("test that confidential contact cannot be retrieved at MH level", () => {
  it("should find the confidential data only when logged as the user", async () => {
    try {
      const user = await api.usericc.getCurrentUser()
      const mhUser = await mhapi.usericc.getCurrentUser()
      await initKeys(api, user)
      await initKeys(mhapi, mhUser)

      const pat = await api.patienticc.newInstance(user, { firstName: "John", lastName: "DoeCtc2" })
      const modifiedPatient = (await api.patienticc.initConfidentialDelegation(pat, user))!!

      await api.contacticc.createContactWithUser(
        user,
        await api.contacticc.newInstance(
          user,
          modifiedPatient,
          { descr: "Confidential info" },
          true
        )
      )

      const retrievedHesAsUser = await api.contacticc.findBy(
        user.healthcarePartyId,
        modifiedPatient
      )
      const retrievedHesAsMh = await mhapi.contacticc.findBy(
        mhUser.healthcarePartyId,
        modifiedPatient
      )

      expect(retrievedHesAsUser.length).to.equal(1, "User should see its confidential data")
      expect(retrievedHesAsMh.length).to.equal(0, "MH should not see confidential data")
    } catch (e) {
      console.log(e)
    }
  })
})
