class MessageService {
    /**
     * @param  {string} entity Name of entity
     */
    constructor(entity) {
      const allMessages = {
        NOT_FOUND: `${entity} not found!`,
        LIST_SUCCESS: `${entity} list fetched successfully`,
        SHOW_SUCCESS: `${entity} found successfully`,
        ERROR: 'some error occured!',
        INSERT_SUCCESS: `${entity} added successfully`,
        UPDATE_SUCCESS: `${entity} updated successfully`,
        DELETE_SUCCESS: `${entity} deleted successfully`,
        INSERT_ERROR: `Error occurred while adding new ${entity.toLowerCase()}`,
        UPDATE_ERROR: `Error occurred while updating ${entity.toLowerCase()}`,
        DELETE_ERROR: `Error occurred while removing ${entity.toLowerCase()}`,
        INVALID_LOGIN: 'Invalid user or password!',
        LOGGED_IN_SUCCESS: 'User logged in successfully.',        
      };
      const messages = {};
      Object.keys(allMessages).forEach(key => {
        messages[key] = allMessages[key];
      });
      return messages;
    }
  }
  
  export default MessageService;
  