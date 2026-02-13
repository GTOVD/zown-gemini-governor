/**
 * @typedef {Object} GovernorConfig
 * @property {number} tpmLimit - The maximum tokens per minute.
 * @property {number} rpmLimit - The maximum requests per minute.
 * @property {number} cooldownSeconds - Default cooldown duration.
 */

/**
 * @typedef {Object} PipelineStage
 * @property {number} id - Stage number (1-9).
 * @property {string} name - Stage identifier.
 * @property {string} status - Current state (PENDING, ACTIVE, COMPLETED).
 */
