class MessageService {
    /**
     * @param  {string} entity Name of entity
     */
    constructor(entity) {
      const allMessages = {
        NOT_FOUND: `${entity} not found!`,
        INSERT_ERROR: `Error occurred while adding new ${entity.toLowerCase()}`,
        UPDATE_ERROR: `Error occurred while updating ${entity.toLowerCase()}`,
        DELETE_ERROR: `Error occurred while removing ${entity.toLowerCase()}`,
      };
      const messages = {};
      Object.keys(allMessages).forEach(key => {
        messages[key] = allMessages[key];
      });
      return messages;
    }
  }
  
  export default MessageService;
  