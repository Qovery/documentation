use super::InternalEvent;
use metrics::counter;
use prost::DecodeError;

#[derive(Debug)]
pub struct QoveryEventSent {
    pub byte_size: usize,
}

impl InternalEvent for QoveryEventSent {
    fn emit_metrics(&self) {
        counter!(
            "events_processed", 1,
            "component_kind" => "sink",
            "component_type" => "qovery",
        );
        counter!(
            "bytes_processed", self.byte_size as u64,
            "component_kind" => "sink",
            "component_type" => "qovery",
        );
    }
}

#[derive(Debug)]
pub struct QoveryEventReceived {
    pub byte_size: usize,
}

impl InternalEvent for QoveryEventReceived {
    fn emit_logs(&self) {
        trace!(message = "received one event.",);
    }

    fn emit_metrics(&self) {
        counter!(
            "events_processed", 1,
            "component_kind" => "sink",
            "component_type" => "qovery",
        );
        counter!(
            "bytes_processed", self.byte_size as u64,
            "component_kind" => "source",
            "component_type" => "qovery",
        );
    }
}

#[derive(Debug)]
pub struct QoveryProtoDecodeError {
    pub error: DecodeError,
}

impl InternalEvent for QoveryProtoDecodeError {
    fn emit_logs(&self) {
        error!(message = "failed to decode protobuf message", error = %self.error);
    }

    fn emit_metrics(&self) {
        counter!(
            "protobuf_decode_errors", 1,
            "component_kind" => "source",
            "component_type" => "qovery",
        );
    }
}
