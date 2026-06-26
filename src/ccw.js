// Name: AI
// ID: kmsai
// Description: Chat with AI in Scratch. Supports OpenAI and Anthropic APIs with streaming responses.
// By: KimosFrontender <https://scratch.mit.edu/users/Kimos-Frontender/>
// License: MIT

// @ts-nocheck
(function (Scratch) {
  // This extension is compatible down to ES6 at minimum.
  "use strict"
  
  var t = {
    zh: {
      'AI': 'AI',
      'Internet connected?': '网络已连接？',
      'Create a new chat with id[ID]': '创建ID为[ID]的新聊天',
      'Delete chat with id[ID]': '删除ID为[ID]的聊天',
      'Clear all chats': '清空所有聊天',
      'Create a new AI preset with id [ID]': '创建ID为[ID]的新AI预设',
      'Delete AI preset with id [ID]': '删除ID为[ID]的AI预设',
      'Clear all AI presets': '清空所有AI预设',
      'Set the [PROP] of AI preset [ID] to [VALUE]': '将AI预设 [ID] 的 [PROP] 设置为 [VALUE]',
      'Use AI preset [PRESET_ID] for chat [CHAT_ID]': '为聊天 [CHAT_ID] 使用AI预设 [PRESET_ID]',
      'Set request format for preset with id[ID] to [FORMAT]': '将ID为[ID]的预设的请求格式设置为 [FORMAT]',
      'Send message [MESSAGE] to chat with id[ID]': '向ID为[ID]的聊天发送消息 [MESSAGE]',
      'Stop message from chat [ID]': '停止聊天 [ID] 的消息',
      'Response from chat [ID]': '聊天 [ID] 的响应',
      'Status of chat with id[ID]': 'ID为[ID]的聊天状态',
      'Is chat with id[ID] idle?': 'ID为[ID]的聊天是否空闲？',
      'Common AI': '常用AI',
      'URL of [AI](Anthropic)': '[AI]的URL(Anthropic)',
      'URL of [AI](OpenAI)': '[AI]的URL(OpenAI)',
      'Data processing(JSON)': '数据处理(JSON)',
      'Overwrite id[ID] in [MAP] with JSON [DATA]': '用JSON [DATA] 覆盖 [MAP] 中的ID [ID]',
      'Overwrite chat history of id[ID] with JSON [DATA]': '用JSON [DATA] 覆盖ID为[ID]的聊天历史',
      'Clear chat history of id[ID]': '清空ID为[ID]的聊天历史',
      'Add a message to chat [ID] with role[ROLE] and content[CONTENT]': '向聊天 [ID] 添加角色为[ROLE]内容为[CONTENT]的消息',
      'Delete message at index [INDEX] from chat with id[ID]': '从ID为[ID]的聊天中删除索引为 [INDEX] 的消息',
      'Cover [DIFF] to [BASE]': '将 [DIFF] 覆盖到 [BASE]',
      "Set [OBJECT]'s [KEY] to [VALUE]": '将 [OBJECT] 的 [KEY] 设置为 [VALUE]',
      'All keys of [MAP]': '[MAP] 的所有键',
      'Data of [ID] from [MAP]': '[MAP] 中 [ID] 的数据',
      'Chat history from id[ID]': 'ID为[ID]的聊天历史',
      '[PROP] of item [INDEX] of chat history id[ID]': '聊天历史ID[ID]中第 [INDEX] 项的 [PROP]',
      'Length of [ARRAY]': '[ARRAY] 的长度',
      'Item [INDEX] of array[ARRAY]': '数组[ARRAY]的第 [INDEX] 项',
      'Item [KEY] of object[OBJECT]': '对象[OBJECT]的 [KEY] 项',
      'Chats': '聊天',
      'AI presets': 'AI预设',
      'API Key': 'API密钥',
      'Request URL': '请求URL',
      'Model': '模型',
      'role': '角色',
      'content': '内容',
      'user': '用户',
      'assistant': '助手',
      'chat1': '聊天1',
      'preset1': '预设1',
      'Hello': '你好',
      'How do you do?': '你好吗？',
      'key1': '键1',
      '"value1"': '"值1"',
    },
    'zh-cn': {
      'AI': 'AI',
      'Internet connected?': '网络已连接？',
      'Create a new chat with id[ID]': '创建ID为[ID]的新聊天',
      'Delete chat with id[ID]': '删除ID为[ID]的聊天',
      'Clear all chats': '清空所有聊天',
      'Create a new AI preset with id [ID]': '创建ID为[ID]的新AI预设',
      'Delete AI preset with id [ID]': '删除ID为[ID]的AI预设',
      'Clear all AI presets': '清空所有AI预设',
      'Set the [PROP] of AI preset [ID] to [VALUE]': '将AI预设 [ID] 的 [PROP] 设置为 [VALUE]',
      'Use AI preset [PRESET_ID] for chat [CHAT_ID]': '为聊天 [CHAT_ID] 使用AI预设 [PRESET_ID]',
      'Set request format for preset with id[ID] to [FORMAT]': '将ID为[ID]的预设的请求格式设置为 [FORMAT]',
      'Send message [MESSAGE] to chat with id[ID]': '向ID为[ID]的聊天发送消息 [MESSAGE]',
      'Stop message from chat [ID]': '停止聊天 [ID] 的消息',
      'Response from chat [ID]': '聊天 [ID] 的响应',
      'Status of chat with id[ID]': 'ID为[ID]的聊天状态',
      'Is chat with id[ID] idle?': 'ID为[ID]的聊天是否空闲？',
      'Common AI': '常用AI',
      'URL of [AI](Anthropic)': '[AI]的URL(Anthropic)',
      'URL of [AI](OpenAI)': '[AI]的URL(OpenAI)',
      'Data processing(JSON)': '数据处理(JSON)',
      'Overwrite id[ID] in [MAP] with JSON [DATA]': '用JSON [DATA] 覆盖 [MAP] 中的ID [ID]',
      'Overwrite chat history of id[ID] with JSON [DATA]': '用JSON [DATA] 覆盖ID为[ID]的聊天历史',
      'Clear chat history of id[ID]': '清空ID为[ID]的聊天历史',
      'Add a message to chat [ID] with role[ROLE] and content[CONTENT]': '向聊天 [ID] 添加角色为[ROLE]内容为[CONTENT]的消息',
      'Delete message at index [INDEX] from chat with id[ID]': '从ID为[ID]的聊天中删除索引为 [INDEX] 的消息',
      'Cover [DIFF] to [BASE]': '将 [DIFF] 覆盖到 [BASE]',
      "Set [OBJECT]'s [KEY] to [VALUE]": '将 [OBJECT] 的 [KEY] 设置为 [VALUE]',
      'All keys of [MAP]': '[MAP] 的所有键',
      'Data of [ID] from [MAP]': '[MAP] 中 [ID] 的数据',
      'Chat history from id[ID]': 'ID为[ID]的聊天历史',
      '[PROP] of item [INDEX] of chat history id[ID]': '聊天历史ID[ID]中第 [INDEX] 项的 [PROP]',
      'Length of [ARRAY]': '[ARRAY] 的长度',
      'Item [INDEX] of array[ARRAY]': '数组[ARRAY]的第 [INDEX] 项',
      'Item [KEY] of object[OBJECT]': '对象[OBJECT]的 [KEY] 项',
      'Chats': '聊天',
      'AI presets': 'AI预设',
      'API Key': 'API密钥',
      'Request URL': '请求URL',
      'Model': '模型',
      'role': '角色',
      'content': '内容',
      'user': '用户',
      'assistant': '助手',
      'chat1': '聊天1',
      'preset1': '预设1',
      'Hello': '你好',
      'How do you do?': '你好吗？',
      'key1': '键1',
      '"value1"': '"值1"',
    },
    'zh-tw': {
      'AI': 'AI',
      'Internet connected?': '網路已連接？',
      'Create a new chat with id[ID]': '建立ID為[ID]的新聊天',
      'Delete chat with id[ID]': '刪除ID為[ID]的聊天',
      'Clear all chats': '清空所有聊天',
      'Create a new AI preset with id [ID]': '建立ID為[ID]的新AI預設',
      'Delete AI preset with id [ID]': '刪除ID為[ID]的AI預設',
      'Clear all AI presets': '清空所有AI預設',
      'Set the [PROP] of AI preset [ID] to [VALUE]': '將AI預設 [ID] 的 [PROP] 設定為 [VALUE]',
      'Use AI preset [PRESET_ID] for chat [CHAT_ID]': '為聊天 [CHAT_ID] 使用AI預設 [PRESET_ID]',
      'Set request format for preset with id[ID] to [FORMAT]': '將ID為[ID]的預設的請求格式設定為 [FORMAT]',
      'Send message [MESSAGE] to chat with id[ID]': '向ID為[ID]的聊天傳送訊息 [MESSAGE]',
      'Stop message from chat [ID]': '停止聊天 [ID] 的訊息',
      'Response from chat [ID]': '聊天 [ID] 的回應',
      'Status of chat with id[ID]': 'ID為[ID]的聊天狀態',
      'Is chat with id[ID] idle?': 'ID為[ID]的聊天是否空閒？',
      'Common AI': '常用AI',
      'URL of [AI](Anthropic)': '[AI]的URL(Anthropic)',
      'URL of [AI](OpenAI)': '[AI]的URL(OpenAI)',
      'Data processing(JSON)': '資料處理(JSON)',
      'Overwrite id[ID] in [MAP] with JSON [DATA]': '用JSON [DATA] 覆蓋 [MAP] 中的ID [ID]',
      'Overwrite chat history of id[ID] with JSON [DATA]': '用JSON [DATA] 覆蓋ID為[ID]的聊天歷史',
      'Clear chat history of id[ID]': '清空ID為[ID]的聊天歷史',
      'Add a message to chat [ID] with role[ROLE] and content[CONTENT]': '向聊天 [ID] 新增角色為[ROLE]內容為[CONTENT]的訊息',
      'Delete message at index [INDEX] from chat with id[ID]': '從ID為[ID]的聊天中刪除索引為 [INDEX] 的訊息',
      'Cover [DIFF] to [BASE]': '將 [DIFF] 覆蓋到 [BASE]',
      "Set [OBJECT]'s [KEY] to [VALUE]": '將 [OBJECT] 的 [KEY] 設定為 [VALUE]',
      'All keys of [MAP]': '[MAP] 的所有鍵',
      'Data of [ID] from [MAP]': '[MAP] 中 [ID] 的資料',
      'Chat history from id[ID]': 'ID為[ID]的聊天歷史',
      '[PROP] of item [INDEX] of chat history id[ID]': '聊天歷史ID[ID]中第 [INDEX] 項的 [PROP]',
      'Length of [ARRAY]': '[ARRAY] 的長度',
      'Item [INDEX] of array[ARRAY]': '陣列[ARRAY]的第 [INDEX] 項',
      'Item [KEY] of object[OBJECT]': '物件[OBJECT]的 [KEY] 項',
      'Chats': '聊天',
      'AI presets': 'AI預設',
      'API Key': 'API金鑰',
      'Request URL': '請求URL',
      'Model': '模型',
      'role': '角色',
      'content': '內容',
      'user': '使用者',
      'assistant': '助手',
      'chat1': '聊天1',
      'preset1': '預設1',
      'Hello': '你好',
      'How do you do?': '你好嗎？',
      'key1': '鍵1',
      '"value1"': '"值1"',
    },
    en: {
      'AI': 'AI',
      'Internet connected?': 'Internet connected?',
      'Create a new chat with id[ID]': 'Create a new chat with id[ID]',
      'Delete chat with id[ID]': 'Delete chat with id[ID]',
      'Clear all chats': 'Clear all chats',
      'Create a new AI preset with id [ID]': 'Create a new AI preset with id [ID]',
      'Delete AI preset with id [ID]': 'Delete AI preset with id [ID]',
      'Clear all AI presets': 'Clear all AI presets',
      'Set the [PROP] of AI preset [ID] to [VALUE]': 'Set the [PROP] of AI preset [ID] to [VALUE]',
      'Use AI preset [PRESET_ID] for chat [CHAT_ID]': 'Use AI preset [PRESET_ID] for chat [CHAT_ID]',
      'Set request format for preset with id[ID] to [FORMAT]': 'Set request format for preset with id[ID] to [FORMAT]',
      'Send message [MESSAGE] to chat with id[ID]': 'Send message [MESSAGE] to chat with id[ID]',
      'Stop message from chat [ID]': 'Stop message from chat [ID]',
      'Response from chat [ID]': 'Response from chat [ID]',
      'Status of chat with id[ID]': 'Status of chat with id[ID]',
      'Is chat with id[ID] idle?': 'Is chat with id[ID] idle?',
      'Common AI': 'Common AI',
      'URL of [AI](Anthropic)': 'URL of [AI](Anthropic)',
      'URL of [AI](OpenAI)': 'URL of [AI](OpenAI)',
      'Data processing(JSON)': 'Data processing(JSON)',
      'Overwrite id[ID] in [MAP] with JSON [DATA]': 'Overwrite id[ID] in [MAP] with JSON [DATA]',
      'Overwrite chat history of id[ID] with JSON [DATA]': 'Overwrite chat history of id[ID] with JSON [DATA]',
      'Clear chat history of id[ID]': 'Clear chat history of id[ID]',
      'Add a message to chat [ID] with role[ROLE] and content[CONTENT]': 'Add a message to chat [ID] with role[ROLE] and content[CONTENT]',
      'Delete message at index [INDEX] from chat with id[ID]': 'Delete message at index [INDEX] from chat with id[ID]',
      'Cover [DIFF] to [BASE]': 'Cover [DIFF] to [BASE]',
      "Set [OBJECT]'s [KEY] to [VALUE]": "Set [OBJECT]'s [KEY] to [VALUE]",
      'All keys of [MAP]': 'All keys of [MAP]',
      'Data of [ID] from [MAP]': 'Data of [ID] from [MAP]',
      'Chat history from id[ID]': 'Chat history from id[ID]',
      '[PROP] of item [INDEX] of chat history id[ID]': '[PROP] of item [INDEX] of chat history id[ID]',
      'Length of [ARRAY]': 'Length of [ARRAY]',
      'Item [INDEX] of array[ARRAY]': 'Item [INDEX] of array[ARRAY]',
      'Item [KEY] of object[OBJECT]': 'Item [KEY] of object[OBJECT]',
      'Chats': 'Chats',
      'AI presets': 'AI presets',
      'API Key': 'API Key',
      'Request URL': 'Request URL',
      'Model': 'Model',
      'role': 'role',
      'content': 'content',
      'user': 'user',
      'assistant': 'assistant',
      'chat1': 'chat1',
      'preset1': 'preset1',
      'Hello': 'Hello',
      'How do you do?': 'How do you do?',
      'key1': 'key1',
      '"value1"': '"value1"',
    },
    ja: {
      'AI': 'AI',
      'Internet connected?': 'インターネットに接続していますか？',
      'Create a new chat with id[ID]': 'ID[ID]の新しいチャットを作成',
      'Delete chat with id[ID]': 'ID[ID]のチャットを削除',
      'Clear all chats': 'すべてのチャットをクリア',
      'Create a new AI preset with id [ID]': 'ID[ID]の新しいAIプリセットを作成',
      'Delete AI preset with id [ID]': 'ID[ID]のAIプリセットを削除',
      'Clear all AI presets': 'すべてのAIプリセットをクリア',
      'Set the [PROP] of AI preset [ID] to [VALUE]': 'AIプリセット[ID]の[PROP]を[VALUE]に設定',
      'Use AI preset [PRESET_ID] for chat [CHAT_ID]': 'チャット[CHAT_ID]にAIプリセット[PRESET_ID]を使用',
      'Set request format for preset with id[ID] to [FORMAT]': 'ID[ID]のプリセットのリクエスト形式を[FORMAT]に設定',
      'Send message [MESSAGE] to chat with id[ID]': 'ID[ID]のチャットにメッセージ[MESSAGE]を送信',
      'Stop message from chat [ID]': 'チャット[ID]のメッセージを停止',
      'Response from chat [ID]': 'チャット[ID]からの応答',
      'Status of chat with id[ID]': 'ID[ID]のチャットの状態',
      'Is chat with id[ID] idle?': 'ID[ID]のチャットはアイドル状態ですか？',
      'Common AI': '一般的なAI',
      'URL of [AI](Anthropic)': '[AI]のURL(Anthropic)',
      'URL of [AI](OpenAI)': '[AI]のURL(OpenAI)',
      'Data processing(JSON)': 'データ処理(JSON)',
      'Overwrite id[ID] in [MAP] with JSON [DATA]': 'JSON[DATA]で[MAP]のID[ID]を上書き',
      'Overwrite chat history of id[ID] with JSON [DATA]': 'JSON[DATA]でID[ID]のチャット履歴を上書き',
      'Clear chat history of id[ID]': 'ID[ID]のチャット履歴をクリア',
      'Add a message to chat [ID] with role[ROLE] and content[CONTENT]': 'チャット[ID]にロール[ROLE]と内容[CONTENT]のメッセージを追加',
      'Delete message at index [INDEX] from chat with id[ID]': 'ID[ID]のチャットからインデックス[INDEX]のメッセージを削除',
      'Cover [DIFF] to [BASE]': '[DIFF]を[BASE]に上書き',
      "Set [OBJECT]'s [KEY] to [VALUE]": '[OBJECT]の[KEY]を[VALUE]に設定',
      'All keys of [MAP]': '[MAP]のすべてのキー',
      'Data of [ID] from [MAP]': '[MAP]の[ID]のデータ',
      'Chat history from id[ID]': 'ID[ID]のチャット履歴',
      '[PROP] of item [INDEX] of chat history id[ID]': 'チャット履歴ID[ID]の[INDEX]番目のアイテムの[PROP]',
      'Length of [ARRAY]': '[ARRAY]の長さ',
      'Item [INDEX] of array[ARRAY]': '配列[ARRAY]の[INDEX]番目のアイテム',
      'Item [KEY] of object[OBJECT]': 'オブジェクト[OBJECT]の[KEY]アイテム',
      'Chats': 'チャット',
      'AI presets': 'AIプリセット',
      'API Key': 'APIキー',
      'Request URL': 'リクエストURL',
      'Model': 'モデル',
      'role': 'ロール',
      'content': '内容',
      'user': 'ユーザー',
      'assistant': 'アシスタント',
      'chat1': 'チャット1',
      'preset1': 'プリセット1',
      'Hello': 'こんにちは',
      'How do you do?': 'ごきげんいかがですか？',
      'key1': 'キー1',
      '"value1"': '"値1"',
    },
    ko: {
      'AI': 'AI',
      'Internet connected?': '인터넷에 연결되었나요?',
      'Create a new chat with id[ID]': 'ID[ID]로 새 채팅 만들기',
      'Delete chat with id[ID]': 'ID[ID]의 채팅 삭제',
      'Clear all chats': '모든 채팅 지우기',
      'Create a new AI preset with id [ID]': 'ID[ID]로 새 AI 프리셋 만들기',
      'Delete AI preset with id [ID]': 'ID[ID]의 AI 프리셋 삭제',
      'Clear all AI presets': '모든 AI 프리셋 지우기',
      'Set the [PROP] of AI preset [ID] to [VALUE]': 'AI 프리셋 [ID]의 [PROP]을(를) [VALUE](으)로 설정',
      'Use AI preset [PRESET_ID] for chat [CHAT_ID]': '채팅 [CHAT_ID]에 AI 프리셋 [PRESET_ID] 사용',
      'Set request format for preset with id[ID] to [FORMAT]': 'ID[ID] 프리셋의 요청 형식을 [FORMAT](으)로 설정',
      'Send message [MESSAGE] to chat with id[ID]': 'ID[ID] 채팅에 메시지 [MESSAGE] 보내기',
      'Stop message from chat [ID]': '채팅 [ID]의 메시지 중지',
      'Response from chat [ID]': '채팅 [ID]의 응답',
      'Status of chat with id[ID]': 'ID[ID] 채팅의 상태',
      'Is chat with id[ID] idle?': 'ID[ID] 채팅이 유휴 상태인가요?',
      'Common AI': '일반적인 AI',
      'URL of [AI](Anthropic)': '[AI]의 URL(Anthropic)',
      'URL of [AI](OpenAI)': '[AI]의 URL(OpenAI)',
      'Data processing(JSON)': '데이터 처리(JSON)',
      'Overwrite id[ID] in [MAP] with JSON [DATA]': 'JSON [DATA](으)로 [MAP]의 ID[ID] 덮어쓰기',
      'Overwrite chat history of id[ID] with JSON [DATA]': 'JSON [DATA](으)로 ID[ID]의 채팅 기록 덮어쓰기',
      'Clear chat history of id[ID]': 'ID[ID]의 채팅 기록 지우기',
      'Add a message to chat [ID] with role[ROLE] and content[CONTENT]': '채팅 [ID]에 역할[ROLE]과 내용[CONTENT]의 메시지 추가',
      'Delete message at index [INDEX] from chat with id[ID]': 'ID[ID] 채팅에서 인덱스 [INDEX]의 메시지 삭제',
      'Cover [DIFF] to [BASE]': '[DIFF]를 [BASE]에 덮어쓰기',
      "Set [OBJECT]'s [KEY] to [VALUE]": '[OBJECT]의 [KEY]을(를) [VALUE](으)로 설정',
      'All keys of [MAP]': '[MAP]의 모든 키',
      'Data of [ID] from [MAP]': '[MAP]의 [ID] 데이터',
      'Chat history from id[ID]': 'ID[ID]의 채팅 기록',
      '[PROP] of item [INDEX] of chat history id[ID]': '채팅 기록 ID[ID]의 [INDEX]번째 항목의 [PROP]',
      'Length of [ARRAY]': '[ARRAY]의 길이',
      'Item [INDEX] of array[ARRAY]': '배열[ARRAY]의 [INDEX]번째 항목',
      'Item [KEY] of object[OBJECT]': '객체[OBJECT]의 [KEY] 항목',
      'Chats': '채팅',
      'AI presets': 'AI 프리셋',
      'API Key': 'API 키',
      'Request URL': '요청 URL',
      'Model': '모델',
      'role': '역할',
      'content': '내용',
      'user': '사용자',
      'assistant': '어시스턴트',
      'chat1': '채팅1',
      'preset1': '프리셋1',
      'Hello': '안녕하세요',
      'How do you do?': '처음 뵙겠습니다',
      'key1': '키1',
      '"value1"': '"값1"',
    },
    fr: {
      'AI': 'IA',
      'Internet connected?': 'Internet connecté ?',
      'Create a new chat with id[ID]': 'Créer un nouveau chat avec l\'ID[ID]',
      'Delete chat with id[ID]': 'Supprimer le chat avec l\'ID[ID]',
      'Clear all chats': 'Effacer tous les chats',
      'Create a new AI preset with id [ID]': 'Créer un nouveau préréglage IA avec l\'ID [ID]',
      'Delete AI preset with id [ID]': 'Supprimer le préréglage IA avec l\'ID [ID]',
      'Clear all AI presets': 'Effacer tous les préréglages IA',
      'Set the [PROP] of AI preset [ID] to [VALUE]': 'Définir le [PROP] du préréglage IA [ID] sur [VALUE]',
      'Use AI preset [PRESET_ID] for chat [CHAT_ID]': 'Utiliser le préréglage IA [PRESET_ID] pour le chat [CHAT_ID]',
      'Set request format for preset with id[ID] to [FORMAT]': 'Définir le format de requête du préréglage avec l\'ID[ID] sur [FORMAT]',
      'Send message [MESSAGE] to chat with id[ID]': 'Envoyer le message [MESSAGE] au chat avec l\'ID[ID]',
      'Stop message from chat [ID]': 'Arrêter le message du chat [ID]',
      'Response from chat [ID]': 'Réponse du chat [ID]',
      'Status of chat with id[ID]': 'Statut du chat avec l\'ID[ID]',
      'Is chat with id[ID] idle?': 'Le chat avec l\'ID[ID] est-il inactif ?',
      'Common AI': 'IA courantes',
      'URL of [AI](Anthropic)': 'URL de [AI](Anthropic)',
      'URL of [AI](OpenAI)': 'URL de [AI](OpenAI)',
      'Data processing(JSON)': 'Traitement des données(JSON)',
      'Overwrite id[ID] in [MAP] with JSON [DATA]': 'Écraser l\'ID[ID] dans [MAP] avec JSON [DATA]',
      'Overwrite chat history of id[ID] with JSON [DATA]': 'Écraser l\'historique du chat ID[ID] avec JSON [DATA]',
      'Clear chat history of id[ID]': 'Effacer l\'historique du chat ID[ID]',
      'Add a message to chat [ID] with role[ROLE] and content[CONTENT]': 'Ajouter un message au chat [ID] avec le rôle[ROLE] et le contenu[CONTENT]',
      'Delete message at index [INDEX] from chat with id[ID]': 'Supprimer le message à l\'index [INDEX] du chat avec l\'ID[ID]',
      'Cover [DIFF] to [BASE]': 'Couvrir [DIFF] vers [BASE]',
      "Set [OBJECT]'s [KEY] to [VALUE]": 'Définir [KEY] de [OBJECT] sur [VALUE]',
      'All keys of [MAP]': 'Toutes les clés de [MAP]',
      'Data of [ID] from [MAP]': 'Données de [ID] depuis [MAP]',
      'Chat history from id[ID]': 'Historique du chat de l\'ID[ID]',
      '[PROP] of item [INDEX] of chat history id[ID]': '[PROP] de l\'élément [INDEX] de l\'historique du chat ID[ID]',
      'Length of [ARRAY]': 'Longueur de [ARRAY]',
      'Item [INDEX] of array[ARRAY]': 'Élément [INDEX] du tableau[ARRAY]',
      'Item [KEY] of object[OBJECT]': 'Élément [KEY] de l\'objet[OBJECT]',
      'Chats': 'Chats',
      'AI presets': 'Préréglages IA',
      'API Key': 'Clé API',
      'Request URL': 'URL de requête',
      'Model': 'Modèle',
      'role': 'rôle',
      'content': 'contenu',
      'user': 'utilisateur',
      'assistant': 'assistant',
      'chat1': 'chat1',
      'preset1': 'préréglage1',
      'Hello': 'Bonjour',
      'How do you do?': 'Comment allez-vous ?',
      'key1': 'clé1',
      '"value1"': '"valeur1"',
    },
    es: {
      'AI': 'IA',
      'Internet connected?': '¿Internet conectado?',
      'Create a new chat with id[ID]': 'Crear un nuevo chat con id[ID]',
      'Delete chat with id[ID]': 'Eliminar chat con id[ID]',
      'Clear all chats': 'Limpiar todos los chats',
      'Create a new AI preset with id [ID]': 'Crear un nuevo preset de IA con id [ID]',
      'Delete AI preset with id [ID]': 'Eliminar preset de IA con id [ID]',
      'Clear all AI presets': 'Limpiar todos los presets de IA',
      'Set the [PROP] of AI preset [ID] to [VALUE]': 'Establecer [PROP] del preset de IA [ID] a [VALUE]',
      'Use AI preset [PRESET_ID] for chat [CHAT_ID]': 'Usar preset de IA [PRESET_ID] para el chat [CHAT_ID]',
      'Set request format for preset with id[ID] to [FORMAT]': 'Establecer formato de solicitud para preset con id[ID] a [FORMAT]',
      'Send message [MESSAGE] to chat with id[ID]': 'Enviar mensaje [MESSAGE] al chat con id[ID]',
      'Stop message from chat [ID]': 'Detener mensaje del chat [ID]',
      'Response from chat [ID]': 'Respuesta del chat [ID]',
      'Status of chat with id[ID]': 'Estado del chat con id[ID]',
      'Is chat with id[ID] idle?': '¿Está inactivo el chat con id[ID]?',
      'Common AI': 'IA comunes',
      'URL of [AI](Anthropic)': 'URL de [AI](Anthropic)',
      'URL of [AI](OpenAI)': 'URL de [AI](OpenAI)',
      'Data processing(JSON)': 'Procesamiento de datos(JSON)',
      'Overwrite id[ID] in [MAP] with JSON [DATA]': 'Sobrescribir id[ID] en [MAP] con JSON [DATA]',
      'Overwrite chat history of id[ID] with JSON [DATA]': 'Sobrescribir historial de chat de id[ID] con JSON [DATA]',
      'Clear chat history of id[ID]': 'Limpiar historial de chat de id[ID]',
      'Add a message to chat [ID] with role[ROLE] and content[CONTENT]': 'Añadir mensaje al chat [ID] con rol[ROLE] y contenido[CONTENT]',
      'Delete message at index [INDEX] from chat with id[ID]': 'Eliminar mensaje en índice [INDEX] del chat con id[ID]',
      'Cover [DIFF] to [BASE]': 'Cubrir [DIFF] a [BASE]',
      "Set [OBJECT]'s [KEY] to [VALUE]": 'Establecer [KEY] de [OBJECT] a [VALUE]',
      'All keys of [MAP]': 'Todas las claves de [MAP]',
      'Data of [ID] from [MAP]': 'Datos de [ID] de [MAP]',
      'Chat history from id[ID]': 'Historial de chat de id[ID]',
      '[PROP] of item [INDEX] of chat history id[ID]': '[PROP] del elemento [INDEX] del historial de chat id[ID]',
      'Length of [ARRAY]': 'Longitud de [ARRAY]',
      'Item [INDEX] of array[ARRAY]': 'Elemento [INDEX] del array[ARRAY]',
      'Item [KEY] of object[OBJECT]': 'Elemento [KEY] del objeto[OBJECT]',
      'Chats': 'Chats',
      'AI presets': 'Presets de IA',
      'API Key': 'Clave API',
      'Request URL': 'URL de solicitud',
      'Model': 'Modelo',
      'role': 'rol',
      'content': 'contenido',
      'user': 'usuario',
      'assistant': 'asistente',
      'chat1': 'chat1',
      'preset1': 'preset1',
      'Hello': 'Hola',
      'How do you do?': '¿Cómo está usted?',
      'key1': 'clave1',
      '"value1"': '"valor1"',
    },
  }

  function translate(s){
    var o = t[Scratch.translate.language]
    if(!o) return s
    var r = o[s]
    if(typeof r === "undefined") return s
    return r
  }

  var BLOCK_ICON_URI =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAADKUlEQVR4nO2b4XGcMBCFn9OAKeE68JVACddB6CBXgtPBdWCuA3cQ0gHu4NIBqeD5BzDmlF0hkNAyk9sZZjw6Cd5+aFcLyE8k8T/bN2sB1vYAYC3A2h4ArAVY2wOAtQBrswZwAXC0FGAJoAbwA0ADQwhWAM4Avg9/P6OHUFoIsQLg3vFnAL8AVLmFWAGoAFyF9jdkhmCZAyrsAMLWAAoAB8/vFYCfQvsbgNf0cgQjueVRk+xIHmf6VZSt3ljfpgDOE0d2C2GrE58ER3YJYYuTHgdnJesGJ33jS2V8Q7LYO4CC5E1xfmpzEDSIbWoIqQE0gmgNyC4gpHS+FsS+e37bBYRUzlcBItdCKIZzuRaSVLMAKBeIOwt9TSHEOn+gPEVLzxhptphBiHFeE3R2+kniYiA0CgQf9E0AvAtCasH5jnLSWgsBXJ9PkgG4CBdvnT4F78Oj5b+zwRzCGucl0Tfe32EtPC6B5yPJ1xwQljovrctSEgoJjxAIvjHj8aqMDQG4CIA7pUdzaWvhMVe4xEBolGsmBSBNaZdySHikhiDVFsGVYqjztXCRRuhX8n6WuOFxYB8ePnEShG4YG9o3uC6IAUDKyebIrweg06R9mhjn7tAUpOaQ9pywqChaEgIaBDcMRmc150drKd9VF6TkUGg+SgoA1Gv5embcQQBAritjlyyxyQGA67N1qlp+6RKbHIAPwlyC80E4ecaNx9olNjkAUH93Nyeo4LoKToJ+i3E+FgAY98ZmCYRS6LebFyI+CHMCNQjThKadPyRksgAA47J8pUCoqb9llmaJKQAwLstrEKQ7XyfUvMl3gbVZvlIcnlqTWO9mn8ZqxYFqZpwW7+QGH0W2BJAagvYwtGsAPghzZeuRX6GUZLmzAgDGl85zMybqeCKz/L9AhX7Xh2tXGGyMmlouAIAO4TeAE4Aul5Cp5QQA9NvjGvTb4qb2gX6fYHYIuXeJtegd/eu0v6AHU2TWY7JNboTwx2l/GX475BRjtU+wRR8OH057h8xhYLlRskM/E0YIJnnAerv8COEKoySYexXYnVnPAHN7ALAWYG0PANYCrO0BwFqAtX0CJHH8H1ebuYYAAAAASUVORK5CYII='
  var DATA_PROCESSING_URI =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAACTUlEQVR4nO2a4U3DMBBGH4gFwggwAoxQRggjlBHKCGWEdoQyQhmhjAAjNCMcP+IK54DWSXw5BH5SRVz5nM8fbmxffCYi/GfOvQV4UwzwFuBNMcBbgDfFAG8B3hQDvAV4M6UBN8AC2AMSrg/Mw3eH72dTibqY6D4r2k6msAx/n4F7GzmfTDECNqR3PqYOsbaIiOVnJl9ZHqm//Kb+zFKjtQEr1ZlFQsxCxWwsNZ6J7Xb4DbiKypdAkxC3B6pw3YQ4E6yfAXHnX0nrPMBLdF2pdrJiaYAWndr5vnVHURZC3gK8KQZ4C/CmGOAtwJtiwIT3GjO3V6erDOO3LoTeT7SVDUsDblRZd+oYuq5uKxtWm6GKdiMUD91r0k3Q8Q1w2yM+GYsRUANbup1f0098AzxF5Sq0WY9Wp8m8v36Tr2wz5hMk3CObZutZYA3cjYh/oDsSsmNtwBzYMXwa29LNHufHIM00E5GdGrZD0lo6P7gTkTq3XstZYEd3/r6lzQqlxu+jckM7i2RPlFj9BBra339Mn5cduu4aoyyR5TPgRZX7rOZ03dSR0xtLA/R/rM+DUBuQfQF0YMrN0JgNjVmStGyHvQV4UwzwFuBNMcBbgDfFAMO29eKlzzrALAmqsT4fMPQ9/585H6Df86ecFarpjgC9p8jKFBmhmBXHExyLUCfG1ACzszfRZyPfE58Xmv9Qx/R8kEyQE4T2rN/zgLg/c04Q2o7cAY+c3tk9hrrmnQf7WeDXUxZC3gK8KQZ4C/CmGOAtwJtigLcAb4oB3gK8+QAub0WlJ923VAAAAABJRU5ErkJggg=='

  class AI {
    constructor() {
      /**
       * @type {Map<string,{
       *   id: string,
       *   aiPresetId: string,
       *   messages: {
       *    role: "user" | "assistant",
       *    content: string
       *   }[],
       *   status: "idle" | "pending" | "streaming",
       *   controller: null | AbortController
       *   response: string | null
       * }>}
       */
      this.chats = new Map()
      /**
       * @type {Map<string,{
       *   id: string,
       *   requestformat: "anthropic" | "openai",
       *   requesturl: string,
       *   model: string,
       *   apikey: string,}>}
       */
      this.presets = new Map()
    }

    // 此扩展原ID 为"ai"，但是CCW已经有扩展用了这个ID，所以更名kmsai

    getInfo() {
      return {
        id: 'kmsai',
        color1: '#3a3a3a',
        color2: '#444444',
        color3: '#777777',
        name: translate('AI'),
        blocks: [
          {
            opcode: 'isInternetConnected',
            blockIconURI: BLOCK_ICON_URI,
            text: translate('Internet connected?'),
            blockType: Scratch.BlockType.BOOLEAN,
            arguments: {},
          },
          {
            opcode: 'createNewChat',
            blockIconURI: BLOCK_ICON_URI,
            text: translate('Create a new chat with id[ID]'),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: translate('chat1'),
              },
            },
          },
          {
            opcode: 'deleteChat',
            blockIconURI: BLOCK_ICON_URI,
            text: translate('Delete chat with id[ID]'),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: translate('chat1'),
              },
            },
          },
          {
            opcode: 'clearAllChats',
            blockIconURI: BLOCK_ICON_URI,
            text: translate('Clear all chats'),
            blockType: Scratch.BlockType.COMMAND,
          },
          {
            opcode: 'createNewAIPreset',
            blockIconURI: BLOCK_ICON_URI,
            text: translate('Create a new AI preset with id [ID]'),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: translate('preset1'),
              },
            },
          },
          {
            opcode: 'deletePreset',
            blockIconURI: BLOCK_ICON_URI,
            text: translate('Delete AI preset with id [ID]'),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: translate('preset1'),
              },
            },
          },
          {
            opcode: 'clearAllPresets',
            blockIconURI: BLOCK_ICON_URI,
            text: translate('Clear all AI presets'),
            blockType: Scratch.BlockType.COMMAND,
          },
          {
            opcode: 'setAiPresetProp',
            blockIconURI: BLOCK_ICON_URI,
            text: translate('Set the [PROP] of AI preset [ID] to [VALUE]'),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: translate('preset1'),
              },
              PROP: {
                type: Scratch.ArgumentType.STRING,
                menu: 'AI_PRESET_PROP',
                defaultValue: 'apikey',
              },
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'sk-xxxx',
              },
            },
          },
          {
            opcode: 'assignAiPresetToChat',
            blockIconURI: BLOCK_ICON_URI,
            text: translate('Use AI preset [PRESET_ID] for chat [CHAT_ID]'),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              PRESET_ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: translate('preset1'),
              },
              CHAT_ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: translate('chat1'),
              },
            },
          },
          {
            opcode: 'setRequestFormatOfPreset',
            blockIconURI: BLOCK_ICON_URI,
            text: translate('Set request format for preset with id[ID] to [FORMAT]'),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: translate('preset1'),
              },
              FORMAT: {
                type: Scratch.ArgumentType.STRING,
                menu: 'REQUEST_FORMATS',
                defaultValue: 'openai',
              },
            },
          },
          {
            opcode: 'sendMessage',
            blockIconURI: BLOCK_ICON_URI,
            text: translate('Send message [MESSAGE] to chat with id[ID]'),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              MESSAGE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: translate('Hello'),
              },
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: translate('chat1'),
              },
            },
          },
          {
            opcode: 'stopMessage',
            blockIconURI: BLOCK_ICON_URI,
            text: translate('Stop message from chat [ID]'),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: translate('chat1'),
              },
            },
          },
          {
            opcode: 'response',
            blockIconURI: BLOCK_ICON_URI,
            text: translate('Response from chat [ID]'),
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: translate('chat1'),
              },
            },
          },
          {
            opcode: 'status',
            blockIconURI: BLOCK_ICON_URI,
            text: translate('Status of chat with id[ID]'),
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: translate('chat1'),
              },
            },
          },
          {
            opcode: 'isIdle',
            blockIconURI: BLOCK_ICON_URI,
            text: translate('Is chat with id[ID] idle?'),
            blockType: Scratch.BlockType.BOOLEAN,
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: translate('chat1'),
              },
            },
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: translate('Common AI'),
          },
          {
            opcode: 'anthropicUrl',
            blockIconURI: BLOCK_ICON_URI,
            text: translate('URL of [AI](Anthropic)'),
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              AI: {
                type: Scratch.ArgumentType.STRING,
                menu: 'COMMON_AI_ANTHROPIC_URLS',
                defaultValue: 'https://api.deepseek.com/anthropic',
              },
            },
          },
          {
            opcode: 'openaiUrl',
            blockIconURI: BLOCK_ICON_URI,
            text: translate('URL of [AI](OpenAI)'),
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              AI: {
                type: Scratch.ArgumentType.STRING,
                menu: 'COMMON_AI_OPENAI_URLS',
                defaultValue: 'https://api.deepseek.com',
              },
            },
          },

          {
            blockType: Scratch.BlockType.LABEL,
            text: translate('Data processing(JSON)'),
          },
          {
            opcode: 'setDataOfMap',
            blockIconURI: DATA_PROCESSING_URI,
            text: translate('Overwrite id[ID] in [MAP] with JSON [DATA]'),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'chat1',
              },
              MAP: {
                type: Scratch.ArgumentType.STRING,
                menu: 'MAP',
                defaultValue: 'chats',
              },
              DATA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{}',
              },
            },
          },
          {
            opcode: 'setDataOfChatHistory',
            blockIconURI: DATA_PROCESSING_URI,
            text: translate('Overwrite chat history of id[ID] with JSON [DATA]'),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'chat1',
              },
              DATA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{}',
              },
            },
          },
          {
            opcode: 'clearChatHistory',
            blockIconURI: DATA_PROCESSING_URI,
            text: translate('Clear chat history of id[ID]'),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'chat1',
              },
            },
          },
          {
            opcode: 'addMessageOfChatHistory',
            blockIconURI: DATA_PROCESSING_URI,
            text: translate(
              'Add a message to chat [ID] with role[ROLE] and content[CONTENT]',
            ),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'chat1',
              },
              ROLE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'CHAT_ROLE',
                defaultValue: 'user',
              },
              CONTENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: translate('How do you do?'),
              },
            },
          },
          {
            opcode: 'deleteItemOfChatHistory',
            blockIconURI: DATA_PROCESSING_URI,
            text: translate('Delete message at index [INDEX] from chat with id[ID]'),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              INDEX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'chat1',
              },
            },
          },
          {
            opcode: 'coverObject',
            blockIconURI: DATA_PROCESSING_URI,
            text: translate('Cover [DIFF] to [BASE]'),
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              DIFF: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key1": 1}',
              },
              BASE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{}',
              },
            },
          },
          {
            opcode: 'setObjectProp',
            blockIconURI: DATA_PROCESSING_URI,
            text: translate("Set [OBJECT]'s [KEY] to [VALUE]"),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              OBJECT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{}',
              },
              KEY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'key1',
              },
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '"value1"',
              },
            },
          },
          {
            opcode: 'allKeysOfMap',
            blockIconURI: DATA_PROCESSING_URI,
            text: translate('All keys of [MAP]'),
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              MAP: {
                type: Scratch.ArgumentType.STRING,
                menu: 'MAP',
                defaultValue: 'chats',
              },
            },
          },
          {
            opcode: 'dataOfMap',
            blockIconURI: DATA_PROCESSING_URI,
            text: translate('Data of [ID] from [MAP]'),
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: translate('chat1'),
              },
              MAP: {
                type: Scratch.ArgumentType.STRING,
                menu: 'MAP',
                defaultValue: 'chats',
              },
            },
          },
          {
            opcode: 'chatHistory',
            blockIconURI: DATA_PROCESSING_URI,
            text: translate('Chat history from id[ID]'),
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: translate('chat1'),
              },
            },
          },
          {
            opcode: 'propOfChatHistory',
            blockIconURI: DATA_PROCESSING_URI,
            blockType: Scratch.BlockType.REPORTER,
            text: translate('[PROP] of item [INDEX] of chat history id[ID]'),
            arguments: {
              PROP: {
                type: Scratch.ArgumentType.STRING,
                menu: 'CHAT_HISTORY_PROP',
                defaultValue: 'content',
              },
              INDEX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: translate('chat1'),
              },
            },
          },
          {
            opcode: 'lengthOfArray',
            blockIconURI: DATA_PROCESSING_URI,
            text: translate('Length of [ARRAY]'),
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              ARRAY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[]',
              },
            },
          },
          {
            opcode: 'itemOfArray',
            blockIconURI: DATA_PROCESSING_URI,
            blockType: Scratch.BlockType.REPORTER,
            text: translate('Item [INDEX] of array[ARRAY]'),
            arguments: {
              INDEX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
              ARRAY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[]',
              },
            },
          },
          {
            opcode: 'itemOfObject',
            blockIconURI: DATA_PROCESSING_URI,
            blockType: Scratch.BlockType.REPORTER,
            text: translate('Item [KEY] of object[OBJECT]'),
            arguments: {
              KEY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: translate('key1'),
              },
              OBJECT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{}',
              },
            },
          },
        ],
        menus: {
          MAP: {
            acceptReporters: true,
            items: [
              {
                text: translate('Chats'),
                value: 'chats',
              },
              {
                text: translate('AI presets'),
                value: 'aipresets',
              },
            ],
          },
          AI_PRESET_PROP: {
            acceptReporters: true,
            items: [
              {
                text: translate('API Key'),
                value: 'apikey',
              },
              {
                text: translate('Request URL'),
                value: 'requesturl',
              },
              {
                text: translate('Model'),
                value: 'model',
              },
            ],
          },
          REQUEST_FORMATS: {
            acceptReporters: false,
            items: [
              {
                text: 'OpenAI',
                value: 'openai',
              },
              {
                text: 'Anthropic',
                value: 'anthropic',
              },
            ],
          },
          COMMON_AI_OPENAI_URLS: {
            acceptReporters: false,
            items: [
              {
                text: 'OpenAI',
                value: 'https://api.openai.com/v1',
              },
              {
                text: 'DeepSeek',
                value: 'https://api.deepseek.com',
              },
              {
                text: 'Qwen',
                value: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
              },
              {
                text: 'Kimi',
                value: 'https://api.moonshot.cn/v1',
              },
              {
                text: 'GLM',
                value: 'https://open.bigmodel.cn/api/paas/v4',
              },
              {
                text: 'Baichuan',
                value: 'https://api.baichuan-ai.com/v1',
              },
              {
                text: 'Doubao',
                value: 'https://ark.cn-beijing.volces.com/api/v3',
              },
              {
                text: 'MiniMax',
                value: 'https://api.minimax.chat/v1',
              },
              {
                text: 'Stepfun',
                value: 'https://api.stepfun.com/v1',
              },
              {
                text: 'Hunyuan',
                value: 'https://api.hunyuan.cloud.tencent.com/v1',
              },
              {
                text: 'Spark',
                value: 'https://spark-api-open.xf-yun.com/v1',
              },
              {
                text: 'Gemini',
                value: 'https://generativelanguage.googleapis.com/v1beta/openai',
              },
              {
                text: 'Groq',
                value: 'https://api.groq.com/openai/v1',
              },
              {
                text: 'Mistral',
                value: 'https://api.mistral.ai/v1',
              },
              {
                text: 'Cohere',
                value: 'https://api.cohere.ai/compatibility/v1',
              },
              {
                text: 'Grok',
                value: 'https://api.x.ai/v1',
              },
              {
                text: 'OpenRouter',
                value: 'https://openrouter.ai/api/v1',
              },
              {
                text: 'Together AI',
                value: 'https://api.together.xyz/v1',
              },
              {
                text: 'Fireworks AI',
                value: 'https://api.fireworks.ai/inference/v1',
              },
              {
                text: 'Perplexity',
                value: 'https://api.perplexity.ai',
              },
              {
                text: 'Novita AI',
                value: 'https://api.novita.ai/v3/openai',
              },
              {
                text: 'SiliconFlow',
                value: 'https://api.siliconflow.cn/v1',
              },
              {
                text: 'Vercel AI Gateway',
                value: 'https://ai-gateway.vercel.sh/v1',
              },
            ],
          },

          COMMON_AI_ANTHROPIC_URLS: {
            acceptReporters: false,
            items: [
              {
                text: 'DeepSeek',
                value: 'https://api.deepseek.com/anthropic',
              },
              {
                text: 'Grok',
                value: 'https://api.x.ai',
              },
              {
                text: 'GLM ',
                value: 'https://open.bigmodel.cn/api/anthropic',
              },
              {
                text: 'Qwen',
                value: 'https://dashscope.aliyuncs.com/apps/anthropic',
              },
              {
                text: 'Mimo',
                value: 'https://token-plan-cn.xiaomimimo.com',
              },
              {
                text: 'Gemini',
                value: 'https://generativelanguage.googleapis.com/v1beta/openai',
              },
              {
                text: 'MiniMax',
                value: 'https://api.minimaxi.com/anthropic',
              },
              {
                text: 'Seed Code',
                value: 'https://ark.cn-beijing.volces.com/api/compatible',
              },
              {
                text: 'Kimi',
                value: 'https://api.moonshot.cn',
              },
              {
                text: 'Claude',
                value: 'https://api.anthropic.com',
              },
              {
                text: 'OpenRouter',
                value: 'https://openrouter.ai/api',
              },
              {
                text: 'OfoxAI',
                value: 'https://api.ofox.io/anthropic',
              },
              {
                text: 'Vercel',
                value: 'https://ai-gateway.vercel.sh',
              },
              {
                text: 'Cloudflare AI',
                value:
                  'https://gateway.ai.cloudflare.com/v1/YOUR_ACCOUNT_ID/YOUR_GATEWAY_ID/anthropic',
              },
            ],
          },

          COMMON_MODELS: {
            acceptReporters: true,
            items: [],
          },
          CHAT_HISTORY_PROP: {
            acceptReporters: true,
            items: [
              {
                text: translate('role'),
                value: 'role',
              },
              {
                text: translate('content'),
                value: 'content',
              },
            ],
          },
          CHAT_ROLE: {
            acceptReporters: false,
            items: [
              {
                text: translate('user'),
                value: 'user',
              },
              {
                text: translate('assistant'),
                value: 'assistant',
              },
            ],
          },
        },
      }
    }
    /**
     * @param {string} url
     * @param {"anthropic"|"openai"} format
     * @returns {string}
     */
    _padUrl(url, format = 'anthropic') {
      if (typeof url !== 'string') return ''
      var result = url
      while (result.endsWith('/')) {
        result = result.slice(0, -1)
      }
      switch (format) {
        case 'anthropic':
          if (result.endsWith('/v1')) {
            result += '/messages'
          } else if (!result.endsWith('/v1/messages')) {
            result += '/v1/messages'
          }
          break
        case 'openai':
          // OpenAI-compatible APIs expect the path to end with /v1/chat/completions
          if (!result.endsWith('/v1/chat/completions')) {
            if (result.endsWith('/v1')) {
              result += '/chat/completions'
            } else {
              result += '/v1/chat/completions'
            }
          }
          break
        default:
          break
      }
      return result
    }
    _sendAnthropic(chat, requesturl, headers, body) {
      function fetchHandle(response) {
        chat.messages.push({
          role: 'assistant',
          content: '',
        })
        if (!response.ok) {
          chat.messages[chat.messages.length - 1].content = 'Request failed:' + response.status
          chat.status = 'idle'
          return
        }
        var reader = response.body.getReader()
        var decoder = new TextDecoder()
        var buffer = ''
        function readHandle(result) {
          if (result.done) {
            chat.messages[chat.messages.length - 1].content = chat.response
            chat.status = 'idle'
            chat.response = null
            return
          }
          buffer += decoder.decode(result.value, { stream: true })
          var lines = buffer.split('\n')
          buffer = lines.pop() || ''

          for (var i = 0; i < lines.length; i++) {
            var line = lines[i]
            if (!line.startsWith('data: ')) continue
            var jsonStr = line.slice(6)

            try {
              var data = JSON.parse(jsonStr)
            } catch (e) {
              continue
            }

            switch (data.type) {
              case 'content_block_start':
                break
              case 'content_block_delta':
                if (data.delta && data.delta.text) {
                  chat.response += data.delta.text
                  chat.messages[chat.messages.length - 1].content = chat.response
                }
                break
              case 'content_block_stop':
                break
              case 'message_delta':
                break
              case 'message_stop':
                break
              case 'error':
                chat.messages[chat.messages.length - 1].content += '[error]'
                chat.status = 'idle'
                chat.response = null
                break
            }
          }
          readStream()
        }
        function readError(error) {
          if (error.name !== 'AbortError') {
            chat.messages[chat.messages.length - 1].content += '[break]'
          } else {
            chat.messages[chat.messages.length - 1].content = chat.response
          }
          chat.status = 'idle'
          chat.response = null
        }
        function readStream() {
          reader.read().then(readHandle).catch(readError)
        }
        readStream()
      }
      function fetchError(error) {
        if (error.name === 'AbortError') {
          chat.messages.push({ role: 'assistant', content: chat.response })
        } else {
          chat.messages.push({
            role: 'assistant',
            content: 'Request failed: ' + error.message,
          })
        }
        chat.status = 'idle'
        chat.response = null
      }

      fetch(requesturl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
        signal: chat.controller.signal,
      })
        .then(fetchHandle)
        .catch(fetchError)
    }
    // Send a streaming request using the OpenAI-compatible chat completions format.
    // The structure mirrors _sendAnthropic above: fetch -> read SSE stream -> accumulate deltas.
    _sendOpenai(chat, requesturl, headers, body) {
      function fetchHandle(response) {
        chat.messages.push({
          role: 'assistant',
          content: '',
        })
        if (!response.ok) {
          chat.messages[chat.messages.length - 1].content = 'Request failed:' + response.status
          chat.status = 'idle'
          return
        }
        var reader = response.body.getReader()
        var decoder = new TextDecoder()
        var buffer = ''
        function readHandle(result) {
          if (result.done) {
            chat.messages[chat.messages.length - 1].content = chat.response
            chat.status = 'idle'
            chat.response = null
            return
          }
          buffer += decoder.decode(result.value, { stream: true })
          var lines = buffer.split('\n')
          buffer = lines.pop() || ''

          for (var i = 0; i < lines.length; i++) {
            var line = lines[i]
            // Each SSE event starts with "data: " followed by JSON
            if (!line.startsWith('data: ')) continue
            var jsonStr = line.slice(6)

            // "[DONE]" marker signals the end of the stream
            if (jsonStr.trim() === '[DONE]') {
              // Stream finished normally — final content is already in chat.response
              continue
            }

            try {
              var data = JSON.parse(jsonStr)
            } catch (e) {
              continue
            }

            // OpenAI-style SSE: data.choices[0].delta.content
            if (
              data.choices &&
              data.choices[0] &&
              data.choices[0].delta &&
              typeof data.choices[0].delta.content === 'string'
            ) {
              chat.response += data.choices[0].delta.content
              chat.messages[chat.messages.length - 1].content = chat.response
            }
          }
          readStream()
        }
        function readError(error) {
          if (error.name !== 'AbortError') {
            chat.messages[chat.messages.length - 1].content += '[break]'
          } else {
            chat.messages[chat.messages.length - 1].content = chat.response
          }
          chat.status = 'idle'
          chat.response = null
        }
        function readStream() {
          reader.read().then(readHandle).catch(readError)
        }
        readStream()
      }
      function fetchError(error) {
        if (error.name === 'AbortError') {
          chat.messages.push({ role: 'assistant', content: chat.response })
        } else {
          chat.messages.push({
            role: 'assistant',
            content: 'Request failed: ' + error.message,
          })
        }
        chat.status = 'idle'
        chat.response = null
      }

      fetch(requesturl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
        signal: chat.controller.signal,
      })
        .then(fetchHandle)
        .catch(fetchError)
    }
    isInternetConnected() {
      return navigator.onLine || false
    }
    deletePreset(args) {
      var ID = Scratch.Cast.toString(args.ID)
      if (!this.presets.has(ID)) return
      this.presets.delete(ID)
    }
    clearAllPresets() {
      this.presets.clear()
    }
    clearAllChats() {
      this.chats.clear()
    }
    deleteChat(args) {
      var ID = Scratch.Cast.toString(args.ID)
      if (!this.chats.has(ID)) return
      this.chats.delete(ID)
    }
    setRequestFormatOfPreset(args) {
      var ID = Scratch.Cast.toString(args.ID)
      var FORMAT = Scratch.Cast.toString(args.FORMAT)
      if (!this.presets.has(ID)) return
      this.presets.get(ID).requestformat = FORMAT
    }
    createNewChat(args) {
      var ID = Scratch.Cast.toString(args.ID)
      if (this.chats.has(ID)) return
      this.chats.set(ID, {
        id: ID,
        aiPresetId: '',
        messages: [],
        status: 'idle',
        controller: null,
        response: null,
      })
    }
    status(args) {
      const ID = Scratch.Cast.toString(args.ID)
      if (!this.chats.has(ID)) return ''
      return this.chats.get(ID).status
    }
    isIdle(args) {
      const ID = Scratch.Cast.toString(args.ID)
      if (!this.chats.has(ID)) return false
      return this.chats.get(ID).status === 'idle'
    }
    createNewAIPreset(args) {
      var ID = Scratch.Cast.toString(args.ID)
      if (this.presets.has(ID)) return
      this.presets.set(ID, {
        id: ID,
        requestformat: 'openai',
        requesturl: '',
        model: '',
        apikey: '',
      })
    }
    setAiPresetProp(args) {
      var ID = Scratch.Cast.toString(args.ID)
      var currentPreset = this.presets.get(ID)
      if (!currentPreset) return
      var PROP = Scratch.Cast.toString(args.PROP)
      var VALUE = Scratch.Cast.toString(args.VALUE)
      switch (PROP) {
        case 'apikey':
          currentPreset.apikey = VALUE
          break
        case 'model':
          currentPreset.model = VALUE
          break
        case 'requesturl':
          currentPreset.requesturl = VALUE
          break
        case 'requestformat':
          currentPreset.requestformat = VALUE
          break
        default:
          return
      }
    }
    assignAiPresetToChat(args) {
      var PRESET_ID = Scratch.Cast.toString(args.PRESET_ID)
      var CHAT_ID = Scratch.Cast.toString(args.CHAT_ID)
      var chat = this.chats.get(CHAT_ID)
      if (!chat) return
      chat.aiPresetId = PRESET_ID
    }

    sendMessage(args) {
      var MESSAGE = Scratch.Cast.toString(args.MESSAGE)
      var ID = Scratch.Cast.toString(args.ID)
      var chat = this.chats.get(ID)
      if (!chat) return
      if (chat.status !== 'idle') return
      var preset = this.presets.get(chat.aiPresetId)
      if (!preset) {
        chat.messages.push({
          role: 'assistant',
          content: 'Error: No AI preset assigned',
        })
        chat.status = 'idle'
        return
      }
      var format = preset.requestformat
      chat.status = 'pending'
      var message = {
        role: 'user',
        content: MESSAGE,
      }
      chat.controller = new AbortController()
      chat.messages.push(message)
      chat.response = ''

      var requesturl = this._padUrl(preset.requesturl, format)
      var headers
      var body

      if (format === 'anthropic') {
        headers = {
          'Content-Type': 'application/json',
          'x-api-key': preset.apikey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        }
        body = {
          model: preset.model,
          messages: chat.messages.map(function (msg) {
            return { role: msg.role, content: msg.content }
          }),
          stream: true,
          max_tokens: 9070,
        }
        this._sendAnthropic(chat, requesturl, headers, body)
      } else if (format === 'openai') {
        // OpenAI-compatible chat completions format
        headers = {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + preset.apikey,
        }
        body = {
          model: preset.model,
          messages: chat.messages.map(function (msg) {
            return { role: msg.role, content: msg.content }
          }),
          stream: true,
        }
        this._sendOpenai(chat, requesturl, headers, body)
      }
    }
    stopMessage(args) {
      var ID = Scratch.Cast.toString(args.ID)
      var chat = this.chats.get(ID)
      if (!chat) return
      if (chat.controller) chat.controller.abort()
    }

    response(args) {
      var ID = Scratch.Cast.toString(args.ID)
      var chat = this.chats.get(ID)
      if (!chat) return ''
      return chat.response || ''
    }
    anthropicUrl(args) {
      return Scratch.Cast.toString(args.AI)
    }
    openaiUrl(args) {
      return Scratch.Cast.toString(args.AI)
    }
    addMessageOfChatHistory(args) {
      var ID = Scratch.Cast.toString(args.ID)
      var ROLE = Scratch.Cast.toString(args.ROLE)
      var CONTENT = Scratch.Cast.toString(args.CONTENT)
      var chat = this.chats.get(ID)
      if (!chat) return
      chat.messages.push({ role: ROLE, content: CONTENT })
    }
    deleteItemOfChatHistory(args) {
      var ID = Scratch.Cast.toString(args.ID)
      var chat = this.chats.get(ID)
      var INDEX = parseInt(Scratch.Cast.toNumber(args.INDEX))
      if (!chat) return
      // Convert 1-based index to 0-based
      chat.messages.splice(INDEX - 1, 1)
    }
    clearChatHistory(args) {
      var ID = Scratch.Cast.toString(args.ID)
      var chat = this.chats.get(ID)
      if (!chat) return
      chat.messages = []
    }
    setDataOfChatHistory(args) {
      var ID = Scratch.Cast.toString(args.ID)
      var chat = this.chats.get(ID)
      if (!chat) return
      var data
      try {
        data = JSON.parse(Scratch.Cast.toString(args.DATA))
        if (!Array.isArray(data)) return
      } catch {
        return
      }
      chat.messages = data
    }
    coverObject(args) {
      var base
      var diff
      // In terms of performance, using a for loop directly is better than Object.assign.
      try {
        base = JSON.parse(Scratch.Cast.toString(args.BASE))
        diff = JSON.parse(Scratch.Cast.toString(args.DIFF))
        for (var i in diff) {
          // In this situation, there's no need to worry about using Object.prototype.hasOwnProperty.call.
          base[i] = diff[i]
        }
      } catch {
        return '{}'
      }
      return JSON.stringify(base)
    }
    setObjectProp(args) {
      var obj
      var prop
      var value
      try {
        obj = JSON.parse(Scratch.Cast.toString(args.OBJECT))
        prop = Scratch.Cast.toString(args.KEY)
        value = JSON.parse(Scratch.Cast.toString(args.VALUE))
        obj[prop] = value
      } catch {
        return '{}'
      }
      return JSON.stringify(obj)
    }
    allKeysOfMap(args) {
      var MAP = Scratch.Cast.toString(args.MAP)
      switch (MAP) {
        case 'chats':
          return JSON.stringify(Array.from(this.chats.keys()))
        case 'aipresets':
          return JSON.stringify(Array.from(this.presets.keys()))
        default:
          return '[]'
      }
    }
    dataOfMap(args) {
      var ID = Scratch.Cast.toString(args.ID)
      var MAP = Scratch.Cast.toString(args.MAP)
      var currentMap
      switch (MAP) {
        case 'chats':
          currentMap = this.chats.get(ID)
          break
        case 'aipresets':
          currentMap = this.presets.get(ID)
          break
        default:
          return '{}'
      }
      if (!currentMap) return '{}'
      return JSON.stringify(currentMap)
    }
    setDataOfMap(args) {
      var ID = Scratch.Cast.toString(args.ID)
      var MAP = Scratch.Cast.toString(args.MAP)
      var DATA = Scratch.Cast.toString(args.DATA)
      var currentMap
      var parsedData
      switch (MAP) {
        case 'chats':
          currentMap = this.chats
          break
        case 'aipresets':
          currentMap = this.presets
          break
        default:
          return
      }
      try {
        parsedData = JSON.parse(DATA)
      } catch {
        return
      }
      if (!(typeof parsedData === 'object')) return
      if (!Array.isArray(parsedData)) return
      currentMap.set(ID, parsedData)
    }
    chatHistory(args) {
      var ID = Scratch.Cast.toString(args.ID)
      var chat = this.chats.get(ID)
      if (!chat) return '[]'
      return JSON.stringify(chat.messages)
    }
    propOfChatHistory(args) {
      var ID = Scratch.Cast.toString(args.ID)
      var INDEX = parseInt(Scratch.Cast.toNumber(args.INDEX))
      var PROP = Scratch.Cast.toString(args.PROP)
      var chat = this.chats.get(ID)
      if (!chat) return ''
      if (INDEX < 1 || INDEX > chat.messages.length) return ''
      var msg = chat.messages[INDEX - 1]
      return msg[PROP] || ''
    }
    lengthOfArray(args) {
      var ARRAY = Scratch.Cast.toString(args.ARRAY)
      var parsedArray
      try {
        parsedArray = JSON.parse(ARRAY)
      } catch {
        parsedArray = []
      }
      return parsedArray.length
    }
    itemOfArray(args) {
      var INDEX = parseInt(Scratch.Cast.toNumber(args.INDEX))
      var ARRAY = Scratch.Cast.toString(args.ARRAY)
      var parsedArray
      try {
        parsedArray = JSON.parse(ARRAY)
      } catch {
        parsedArray = []
      }
      var item = parsedArray[INDEX - 1]
      if (typeof item === 'undefined') return ''
      return item
    }
    itemOfObject(args) {
      var KEY = Scratch.Cast.toString(args.KEY)
      var OBJECT = Scratch.Cast.toString(args.OBJECT)
      var parsedObject
      try {
        parsedObject = JSON.parse(OBJECT)
      } catch {
        parsedObject = {}
      }
      var item = parsedObject[KEY]
      if (typeof item === 'undefined') return ''
      return item
    }
  }
  Scratch.extensions.register(new AI())
})(Scratch)
