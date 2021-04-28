package br.edu.ifpb.chatserver.listener;

import br.edu.ifpb.chatserver.constants.KafkaConstants;
import br.edu.ifpb.chatserver.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class MessageListener {
    @Autowired
    SimpMessagingTemplate template;

    @KafkaListener(
            topics = KafkaConstants.KAFKA_TOPIC,
            groupId = KafkaConstants.KAFKA_GROUP
    )
    public void listen(Message message) {
        template.convertAndSend("/topic/group", message);
    }
}
