import { applyMixins } from "./apply-mixins"
import { Base } from "./base"
import { Funds } from "./funds"
import { Organisations } from "./organisations"
import { Outcomes } from "./outcomes"

/**
 * Inherits from all the other classes featuring the API calls to GtR.
 */
class GtrClient extends Base {}
interface GtrClient extends Funds, Organisations, Outcomes {}
applyMixins(GtrClient, [Funds, Organisations, Outcomes])

export * from "./funds/interfaces"
export * from "./generic.interfaces"
export * from "./organisations/interfaces"
export * from "./outcomes/interfaces"
export { GtrClient as GtrClient }
